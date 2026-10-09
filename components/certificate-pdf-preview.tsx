'use client'

import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import { FileText } from 'lucide-react'

async function fetchCertificatePdf(url: string) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Certificate PDF could not be loaded')
  return response.arrayBuffer()
}

type CertificatePdfPreviewProps = {
  file: string
  title: string
  eager?: boolean
  dialog?: boolean
}

export function CertificatePdfPreview({ file, title, eager = false, dialog = false }: CertificatePdfPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(eager)
  const [isRendered, setIsRendered] = useState(false)
  const [hasRenderError, setHasRenderError] = useState(false)
  const search = new URLSearchParams({ source: file })
  const documentUrl = `/api/certificate-document?${search.toString()}`
  const { data, error, isLoading } = useSWR(isVisible ? documentUrl : null, fetchCertificatePdf, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  useEffect(() => {
    if (eager || isVisible || !containerRef.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [eager, isVisible])

  useEffect(() => {
    if (!data || !canvasRef.current || !containerRef.current) return

    let cancelled = false
    let cancelRender: (() => void) | undefined
    let cancelLoading = () => {}

    const renderFirstPage = async () => {
      try {
        const pdfjs = await import('pdfjs-dist')
        if (cancelled) return

        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'
        const loadingTask = pdfjs.getDocument({ data: new Uint8Array(data.slice(0)) })
        cancelLoading = () => { void loadingTask.destroy() }
        const document = await loadingTask.promise
        const page = await document.getPage(1)
        if (cancelled) {
          await loadingTask.destroy()
          return
        }

        const canvas = canvasRef.current
        const container = containerRef.current
        const context = canvas?.getContext('2d')
        if (!canvas || !container || !context) throw new Error('Certificate preview canvas is unavailable')

        const pageSize = page.getViewport({ scale: 1 })
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
        const fitScale = Math.min(container.clientWidth / pageSize.width, container.clientHeight / pageSize.height)
        const viewport = page.getViewport({ scale: Math.max(fitScale * pixelRatio, 0.1) })

        canvas.width = Math.ceil(viewport.width)
        canvas.height = Math.ceil(viewport.height)
        const renderTask = page.render({ canvas, canvasContext: context, viewport, background: '#fff' })
        cancelRender = () => renderTask.cancel()
        await renderTask.promise
        if (!cancelled) setIsRendered(true)
      } catch (renderError) {
        if (!cancelled) {
          console.error('[v0] Certificate preview render failed:', renderError)
          setHasRenderError(true)
        }
      }
    }

    void renderFirstPage()

    return () => {
      cancelled = true
      cancelRender?.()
      cancelLoading()
    }
  }, [data])

  const className = `certificate-pdf-preview${dialog ? ' certificate-pdf-preview--dialog' : ''}${isRendered ? ' certificate-pdf-preview--loaded' : ''}`

  return (
    <div ref={containerRef} className={className} role="img" aria-label={`PDF preview of ${title}`} aria-busy={isVisible && !isRendered && !error && !hasRenderError}>
      <canvas ref={canvasRef} aria-hidden="true" />
      {!isRendered && !error && !hasRenderError && <span className="certificate-pdf-status">{isLoading ? 'Loading certificate…' : <><FileText aria-hidden="true" /> Certificate preview</>}</span>}
      {(error || hasRenderError) && <span className="certificate-pdf-error"><FileText aria-hidden="true" /> Certificate preview unavailable</span>}
    </div>
  )
}

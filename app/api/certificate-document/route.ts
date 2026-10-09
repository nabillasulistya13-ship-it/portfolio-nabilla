const BLOB_ORIGIN = 'https://blobs.vusercontent.net'
const PDF_TYPE = 'application/pdf'

function getTrustedPdfUrl(value: string | null) {
  if (!value) return null

  try {
    const url = new URL(value)
    const isTrustedBlob = url.origin === BLOB_ORIGIN && url.pathname.startsWith('/blob/') && url.pathname.toLowerCase().endsWith('.pdf')
    return isTrustedBlob ? url : null
  } catch {
    return null
  }
}

function getPartialRange(range: string | null, length: number) {
  if (!range) return null

  const match = /^bytes=(\d*)-(\d*)$/.exec(range)
  if (!match || (!match[1] && !match[2])) return 'invalid'

  const suffixLength = match[1] ? null : Number(match[2])
  const start = match[1] ? Number(match[1]) : Math.max(0, length - (suffixLength ?? 0))
  const end = match[2] && match[1] ? Math.min(Number(match[2]), length - 1) : length - 1

  if (start >= length || end < start) return 'invalid'
  return { start, end }
}

async function serveCertificate(request: Request) {
  const source = getTrustedPdfUrl(new URL(request.url).searchParams.get('source'))
  if (!source) return new Response('Invalid certificate source', { status: 400 })

  try {
    const upstream = await fetch(source, { cache: 'force-cache', redirect: 'error' })
    if (!upstream.ok || !upstream.headers.get('content-type')?.includes(PDF_TYPE)) {
      return new Response('Certificate PDF unavailable', { status: 502 })
    }

    const pdf = await upstream.arrayBuffer()
    const byteRange = getPartialRange(request.headers.get('range'), pdf.byteLength)
    if (byteRange === 'invalid') {
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': `bytes */${pdf.byteLength}`, 'Accept-Ranges': 'bytes' },
      })
    }

    const start = byteRange?.start ?? 0
    const end = byteRange?.end ?? pdf.byteLength - 1
    const body = request.method === 'HEAD' ? null : pdf.slice(start, end + 1)
    const headers = new Headers({
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
      'Content-Disposition': 'inline; filename="certificate.pdf"',
      'Content-Length': String(end - start + 1),
      'Content-Security-Policy': "frame-ancestors 'self'",
      'Content-Type': PDF_TYPE,
      'X-Content-Type-Options': 'nosniff',
    })

    if (byteRange) headers.set('Content-Range', `bytes ${start}-${end}/${pdf.byteLength}`)

    return new Response(body, { status: byteRange ? 206 : 200, headers })
  } catch {
    return new Response('Certificate PDF unavailable', { status: 502 })
  }
}

export function GET(request: Request) {
  return serveCertificate(request)
}

export function HEAD(request: Request) {
  return serveCertificate(request)
}

'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/data'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="nabilla.dev home">
      <span className="flex h-7 items-end gap-1" aria-hidden="true">
        <span className="h-3.5 w-2 rounded-full bg-primary" />
        <span className="h-5 w-2 rounded-full bg-primary" />
        <span className="h-7 w-2 rounded-full bg-primary" />
      </span>
      <span className="text-2xl font-bold tracking-tight text-foreground">
        nabilla<span className="text-primary">.dev</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const ids = [...navItems.map((n) => n.id), 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-[15px] text-muted-foreground transition-colors hover:text-primary',
                active === item.id && 'bg-accent font-semibold text-primary',
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 rounded-full bg-primary px-5 py-2.5 text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border bg-card lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {[...navItems, { id: 'contact', label: 'Contact' }].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-muted-foreground',
                    active === item.id && 'bg-accent font-semibold text-primary',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

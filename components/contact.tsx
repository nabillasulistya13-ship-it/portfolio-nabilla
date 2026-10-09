import { Mail } from 'lucide-react'
import { profile } from '@/lib/data'
import { ContactLinks } from './contact-links'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative grid gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-brand-cyan p-8 text-primary-foreground md:grid-cols-2 md:p-12">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Contact</p>
            <h2 id="contact-title" className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
              {"Let's"} work together.
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-white/85">
              Open to opportunities in data analytics, business intelligence, and AI automation. Feel
              free to reach out—{"I'd"} love to hear from you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send an email
            </a>
          </div>
          <div className="relative text-foreground">
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </p>
        <p>Data Analytics · Business Intelligence · AI Automation</p>
      </div>
    </footer>
  )
}

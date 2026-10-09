import { Mail, Phone, type LucideIcon } from 'lucide-react'
import { profile } from '@/lib/data'
import { cn } from '@/lib/utils'

type ContactItem = {
  label: string
  value: string
  href: string
} & ({ icon: LucideIcon; logo?: never } | { logo: string; icon?: never })

export const contactItems: ContactItem[] = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'WhatsApp', value: profile.phone, href: profile.whatsapp },
  { logo: '/logos/linkedin.svg', label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
  { logo: '/logos/instagram.svg', label: 'Instagram', value: profile.instagramLabel, href: profile.instagram },
]

export function ContactLinks({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={cn('flex flex-col', compact ? 'gap-1 p-3' : 'gap-3')}>
      {contactItems.map(({ icon: Icon, logo, label, value, href }) => {
        const external = href.startsWith('http')
        return (
          <li key={label}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-xl transition-colors hover:bg-secondary',
                compact ? 'px-2 py-2 text-sm' : 'border bg-card p-4',
              )}
            >
              <span
                className={cn(
                  'flex shrink-0 items-center justify-center text-primary',
                  compact ? 'size-7' : 'size-11 rounded-lg bg-white shadow-sm ring-1 ring-border',
                )}
              >
                {Icon ? (
                  <Icon
                    className={cn('size-6', Icon === Phone && 'fill-primary')}
                    strokeWidth={Icon === Phone ? 1.5 : 2.25}
                    aria-hidden="true"
                  />
                ) : (
                  <img src={logo} alt="" aria-hidden="true" className="size-6" />
                )}
              </span>
              <span className="min-w-0">
                {!compact && <span className="block text-xs text-muted-foreground">{label}</span>}
                <span className={cn('block truncate', !compact && 'font-semibold')}>
                  {compact && <span className="sr-only">{label}: </span>}
                  {value}
                </span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

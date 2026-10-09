import { Award, BarChart3, Bot, Database } from 'lucide-react'
import { certificates, skillGroups, tools } from '@/lib/data'
import { SectionHeading } from './section-heading'

const groupIcons = [Database, BarChart3, Bot]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="What I"
          highlight="bring"
          description="A toolkit for turning raw data into insight—and repetitive work into automated workflows."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i]
            return (
              <article key={group.title} className="rounded-3xl border bg-card p-6 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-6 rounded-3xl border bg-card p-6 shadow-sm md:p-8">
          <h3 className="text-xl font-bold">Tools & Software</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {tools.map((t) => (
              <li key={t.name} className="flex items-center gap-2 rounded-full border bg-background py-1.5 pl-1.5 pr-4 text-sm font-medium">
                <span className="flex size-7 items-center justify-center rounded-full bg-white p-1 ring-1 ring-border">
                  <img src={t.logo} alt="" aria-hidden="true" className="size-full object-contain" />
                </span>
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Certificates() {
  return (
    <section id="certificates" aria-labelledby="certificates-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="certificates-title"
          eyebrow="Certificates"
          title="Credentials &"
          highlight="achievements"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {certificates.map((c) => (
            <li key={c.title} className="flex flex-col rounded-3xl border bg-card p-6 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                <Award className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{c.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

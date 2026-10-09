import { Briefcase, Users } from 'lucide-react'
import { experiences, organizations } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've"
          highlight="worked"
          description="Hands-on experience applying data and automation to real operational problems."
        />
        <ol className="mt-12 flex flex-col gap-6">
          {experiences.map((exp) => (
            <li
              key={exp.company}
              className="grid gap-6 rounded-3xl border bg-card p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8"
            >
              <div className="flex items-start gap-4 md:flex-col">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                  <Briefcase className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">{exp.period}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {exp.role} <span className="text-muted-foreground">@ {exp.company}</span>
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {exp.tags.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Organization() {
  return (
    <section
      id="organization"
      aria-labelledby="organization-title"
      className="bg-secondary/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="organization-title"
          eyebrow="Organization"
          title="Beyond the"
          highlight="classroom"
          description="Activities that shaped how I collaborate, communicate, and lead."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {organizations.map((org) => (
            <li key={org.name} className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Users className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{org.role}</h3>
                  <p className="text-sm text-muted-foreground">{org.period}</p>
                </div>
              </div>
              <p className="mt-5 font-semibold">{org.name}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{org.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

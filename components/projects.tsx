import { BarChart3, Bike, GraduationCap, MonitorSmartphone } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionHeading } from './section-heading'

const icons = [BarChart3, GraduationCap, Bike, MonitorSmartphone]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected"
          highlight="work"
          description="From data preparation and EDA through to interactive dashboards and automated systems."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li
                key={project.title}
                className="group flex flex-col rounded-3xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-brand-cyan text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
                  {project.tags.map((t) => (
                    <li key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

import {
  ArrowUpRight,
  CheckCircle2,
  Contact,
  Globe,
  GraduationCap,
  Laptop,
  Star,
} from 'lucide-react'
import { profile, skillsInterests, tools } from '@/lib/data'
  import { ContactLinks } from './contact-links'
  import { ProfilePortrait } from './profile-portrait'

function CardTitle({ icon: Icon, children }: { icon: typeof Star; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b bg-secondary/60 px-5 py-4">
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-bold">{children}</h3>
    </div>
  )
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-gradient-to-b from-secondary/50 to-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="flex flex-col gap-6">
  <ProfilePortrait />

          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b bg-secondary/60 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Contact className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">Contact Me</h3>
              </div>
              <a href="#contact" className="text-primary" aria-label="Go to contact section">
                <ArrowUpRight className="size-5" />
              </a>
            </div>
            <ContactLinks compact />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
              <span className="h-0.5 w-8 rounded-full bg-primary" aria-hidden="true" />
              About me
            </p>
            <h2 id="about-title" className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
              {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                {"I'm"} an Information Systems graduate from Gunadarma University with a strong interest
                in data analytics, business intelligence, and AI automation. I use Python, SQL, and BI
                tools to clean and explore data, find meaningful patterns, and build clear dashboards
                that support better decisions.
              </p>
              <p>
                During my IT internship at Bank Rakyat Indonesia, I built a device-monitoring system
                supporting 253 work units. Across academic and personal projects, {"I've"} analyzed
                datasets on poverty, student performance, and bike sharing—from preparation and EDA
                through to interactive reporting.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col gap-5">
              <article className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                <CardTitle icon={GraduationCap}>Education</CardTitle>
                <div className="px-5 py-4">
                  <p className="text-sm text-muted-foreground">2022 – 2026</p>
                  <p className="mt-1 font-bold">Gunadarma University</p>
                  <p className="text-sm text-muted-foreground">Bachelor of Information Systems</p>
                  <p className="mt-3 inline-flex items-baseline gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm">
                    <span className="font-medium text-muted-foreground">GPA</span>
                    <span className="font-bold text-primary">3.84</span>
                    <span className="text-muted-foreground">/ 4.00</span>
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                <CardTitle icon={Globe}>Languages</CardTitle>
                <dl className="flex flex-col gap-2 px-5 py-4 text-sm">
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold">Bahasa Indonesia</dt>
                    <dd className="text-muted-foreground">· Native</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold">English</dt>
                    <dd className="text-muted-foreground">· Intermediate</dd>
                  </div>
                </dl>
              </article>
            </div>

            <article className="overflow-hidden rounded-2xl border bg-card shadow-sm">
              <CardTitle icon={Star}>Skills & Interests</CardTitle>
              <ul className="flex flex-col gap-3 px-5 py-4">
                {skillsInterests.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="size-5 shrink-0 fill-primary text-white" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </article>

            <article className="overflow-hidden rounded-2xl border bg-card shadow-sm">
              <CardTitle icon={Laptop}>Tools & Software</CardTitle>
              <ul className="grid grid-cols-3 gap-x-2 gap-y-4 px-4 py-4">
                {tools.map((t) => (
                  <li key={t.name} className="flex flex-col items-center gap-1.5 text-center text-xs text-muted-foreground">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-border">
                      <img src={t.logo} alt="" aria-hidden="true" className="size-full object-contain" />
                    </span>
                    {t.name}
                  </li>
                ))}
              </ul>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

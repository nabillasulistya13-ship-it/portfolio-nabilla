import Image from 'next/image'
import { ArrowDownRight, Sparkles } from 'lucide-react'
import { heroTags, profile } from '@/lib/data'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 top-20 size-[36rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            <Sparkles className="size-4" aria-hidden="true" />
            Data Analytics | Business Intelligence | AI Automation
          </p>

          <p className="mt-8 text-lg text-muted-foreground">{"Hello, I'm"}</p>
          <h1 className="mt-2 text-balance text-[2.5rem] font-extrabold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl">
            <span className="block text-foreground">{profile.firstName}</span>
            <span className="text-gradient block pb-2">{profile.lastName}.</span>
          </h1>

          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            I turn complex data into{' '}
            <strong className="font-semibold text-foreground">clear, useful decisions.</strong>
          </p>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Information Systems graduate focused on data analytics, business intelligence, and AI
            automation. I enjoy finding the story behind the numbers and building dashboards that make
            it easy to act on.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Explore my work
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border bg-white px-7 py-4 font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Core skills">
            {heroTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border bg-white/80 px-4 py-1.5 text-sm text-secondary-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-[2rem] border border-primary/10 bg-white/50 p-3 shadow-2xl shadow-primary/10 backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/graduation.jpg"
                alt="Nabilla Sulistyaningrum at her graduation holding a bouquet of flowers"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover object-[60%_center]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/85 px-5 py-4 backdrop-blur-md sm:right-auto">
                <p className="text-lg font-bold text-foreground">
                  {profile.firstName} {profile.lastName}
                </p>
                <p className="text-sm text-muted-foreground">{profile.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

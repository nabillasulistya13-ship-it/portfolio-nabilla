type SectionHeadingProps = {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, highlight, description, id }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
        <span className="h-0.5 w-8 rounded-full bg-primary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

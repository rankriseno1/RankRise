import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-extrabold md:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-navy-muted md:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </header>
  )
}

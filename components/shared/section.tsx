import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'default' | 'muted' | 'navy'
  labelledBy?: string
}

export function Section({ id, children, className, tone = 'default', labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'relative scroll-mt-20 py-16 md:py-24',
        tone === 'muted' && 'bg-secondary/60',
        tone === 'navy' && 'bg-navy text-navy-foreground',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'light'
  action?: ReactNode
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-6 md:mb-12',
        align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        {eyebrow ? (
          <p
            className={cn(
              'mb-3 text-xs font-semibold uppercase tracking-[0.16em]',
              tone === 'light' ? 'text-sky-300' : 'text-primary',
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={id}
          className={cn(
            'text-3xl font-bold md:text-4xl',
            tone === 'light' ? 'text-navy-foreground' : 'text-foreground',
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              'mt-4 text-pretty text-base leading-relaxed md:text-lg',
              tone === 'light' ? 'text-navy-muted' : 'text-muted-foreground',
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

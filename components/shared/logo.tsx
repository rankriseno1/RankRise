import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  tone?: 'dark' | 'light'
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn('size-8', className)}>
      <defs>
        <linearGradient id="rr-mark" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(0.42 0.19 264)" />
          <stop offset="1" stopColor="oklch(0.62 0.17 245)" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#rr-mark)" />
      <rect x="7" y="18" width="4" height="7" rx="1.5" fill="white" fillOpacity="0.55" />
      <rect x="14" y="13" width="4" height="12" rx="1.5" fill="white" fillOpacity="0.8" />
      <rect x="21" y="8" width="4" height="17" rx="1.5" fill="white" />
    </svg>
  )
}

export function Logo({ className, tone = 'dark' }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
        className,
      )}
      aria-label="Rank Rise home"
    >
      <LogoMark />
      <span
        className={cn(
          'font-heading text-lg font-extrabold tracking-tight',
          tone === 'light' ? 'text-navy-foreground' : 'text-foreground',
        )}
      >
        Rank <span className={tone === 'light' ? 'text-sky-300' : 'text-primary'}>Rise</span>
      </span>
    </Link>
  )
}

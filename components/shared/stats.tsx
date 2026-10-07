import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type StatCardProps = {
  label: string
  value: ReactNode
  hint?: string
  icon?: LucideIcon
  className?: string
}

export function StatCard({ label, value, hint, icon: Icon, className }: StatCardProps) {
  return (
    <div className={cn('rounded-2xl border bg-card p-5 shadow-sm', className)}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {Icon ? (
          <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Icon className="size-4" aria-hidden="true" />
          </span>
        ) : null}
      </div>
      <p className="mt-3 font-heading text-3xl font-bold text-foreground">{value}</p>
      {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

type ProgressBarProps = {
  value: number
  label?: string
  className?: string
  barClassName?: string
}

export function ProgressBar({ value, label, className, barClassName }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={cn('h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
    >
      <div
        className={cn('h-full rounded-full bg-gradient-to-r from-primary to-sky-500 transition-all duration-700', barClassName)}
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}

export function TopicChip({ children, tone }: { children: ReactNode; tone: 'strong' | 'weak' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        tone === 'strong' ? 'bg-emerald-50 text-emerald-800' : 'bg-orange-50 text-orange-800',
      )}
    >
      {children}
    </span>
  )
}

type ScoreRingProps = { value: number; max: number; size?: number; label?: string; tone?: 'default' | 'light' }

export function ScoreRing({ value, max, size = 120, label = 'Rank Rise Score', tone = 'default' }: ScoreRingProps) {
  const stroke = 10
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(1, value / max)
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${label}: ${value} out of ${max}`}>
        <defs>
          <linearGradient id="score-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.17 245)" />
            <stop offset="100%" stopColor="oklch(0.5 0.2 262)" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className={tone === 'light' ? 'stroke-white/10' : 'stroke-secondary'}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#score-ring)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn('font-heading text-2xl font-bold', tone === 'light' ? 'text-white' : 'text-foreground')}>
          {value}
        </span>
        <span className={cn('text-[11px]', tone === 'light' ? 'text-navy-muted' : 'text-muted-foreground')}>/ {max}</span>
      </div>
    </div>
  )
}

import { FlaskConical, Info } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function DemoBadge({ className, tone = 'default' }: { className?: string; tone?: 'default' | 'light' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider',
        tone === 'light'
          ? 'border-amber-300/40 bg-amber-300/10 text-amber-200'
          : 'border-amber-300 bg-amber-50 text-amber-800',
        className,
      )}
    >
      <FlaskConical className="size-3" aria-hidden="true" />
      Demo Data
    </span>
  )
}

export function Disclaimer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        'flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900',
        className,
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <p>{children}</p>
    </div>
  )
}

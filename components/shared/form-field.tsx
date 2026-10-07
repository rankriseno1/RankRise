import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const controlClass =
  'w-full rounded-xl border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30'

type FieldProps = { label: string; id: string }

export function TextField({ label, id, className, ...props }: FieldProps & ComponentProps<'input'>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input id={id} name={id} className={cn(controlClass, 'h-11', className)} {...props} />
    </div>
  )
}

export function TextAreaField({ label, id, className, ...props }: FieldProps & ComponentProps<'textarea'>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <textarea id={id} name={id} className={cn(controlClass, 'min-h-32 py-3', className)} {...props} />
    </div>
  )
}

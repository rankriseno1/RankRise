import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const actionVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30',
        outline: 'border border-input bg-card text-foreground hover:border-primary/40 hover:bg-accent hover:text-accent-foreground',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
        light: 'bg-white text-navy shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:bg-white/90',
        'outline-light': 'border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10',
      },
      size: {
        sm: 'h-9 px-3.5 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type ButtonLinkProps = ComponentProps<typeof Link> & VariantProps<typeof actionVariants>

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <Link className={cn(actionVariants({ variant, size }), className)} {...props} />
}

type ActionButtonProps = ComponentProps<'button'> & VariantProps<typeof actionVariants>

export function ActionButton({ className, variant, size, type = 'button', ...props }: ActionButtonProps) {
  return <button type={type} className={cn(actionVariants({ variant, size }), className)} {...props} />
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogIn, Menu, X } from 'lucide-react'
import { Logo } from '@/components/shared/logo'
import { ButtonLink } from '@/components/shared/button-link'
import { mainNav } from '@/lib/site'
import { cn } from '@/lib/utils'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [lastPath, setLastPath] = useState(pathname)

  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70">
      <nav aria-label="Main" className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
                    active ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ButtonLink href="/login" size="sm" className="hidden lg:inline-flex">
            <LogIn aria-hidden="true" />
            Login
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center rounded-lg border bg-card text-foreground transition-colors hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50 outline-none lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t bg-background lg:hidden"
      >
        <ul className="mx-auto flex max-h-[calc(100dvh-4rem)] max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
          {mainNav.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    active ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-secondary',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li className="pt-2">
            <ButtonLink href="/login" size="lg" className="w-full">
              <LogIn aria-hidden="true" />
              Login
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

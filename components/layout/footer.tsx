import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Logo } from '@/components/shared/logo'
import { footerNav, siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-4 font-heading text-lg font-semibold">{siteConfig.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed text-navy-muted">{siteConfig.description}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-navy-muted transition-colors hover:text-white"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-navy-muted transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-navy-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Rank Rise. All rights reserved.</p>
          <p className="text-xs">
            Rank Rise is an independent preparation platform and is not affiliated with any government body or exam
            conducting authority.
          </p>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { LoginForm } from '@/components/auth/login-form'
import { Logo } from '@/components/shared/logo'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to Rank Rise to save progress and track performance.',
}

const perks = ['Save quiz history and streaks', 'Personalised weak-topic practice', 'Your Rank Rise Score over time']

export default function LoginPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
      <div className="relative hidden overflow-hidden rounded-3xl bg-navy p-10 text-navy-foreground lg:block">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 size-80 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <Logo tone="light" />
          <h2 className="mt-10 text-3xl font-bold leading-tight">Practice Smart. Rank Higher.</h2>
          <p className="mt-3 text-navy-muted">Sign in to turn every practice session into measurable progress.</p>
          <ul className="mt-8 flex flex-col gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="size-4 text-sky-300" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md">
        <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
        <p className="mt-2 text-muted-foreground">Log in to continue your preparation.</p>
        <LoginForm />
      </div>
    </div>
  )
}

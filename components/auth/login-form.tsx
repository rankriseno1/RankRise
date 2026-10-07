'use client'

import { useState, type FormEvent } from 'react'
import { LogIn } from 'lucide-react'
import { ActionButton } from '@/components/shared/button-link'
import { Disclaimer } from '@/components/shared/demo-badge'
import { TextField } from '@/components/shared/form-field'

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
      <TextField id="email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" required />
      <TextField id="password" label="Password" type="password" autoComplete="current-password" placeholder="••••••••" required minLength={8} />
      <ActionButton type="submit" size="lg" className="w-full">
        <LogIn aria-hidden="true" />
        Log in
      </ActionButton>
      <div role="status" aria-live="polite">
        {submitted ? (
          <Disclaimer>
            Accounts are not enabled yet in this preview. Login and progress saving will be available in an upcoming release.
          </Disclaimer>
        ) : null}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        {"Don't have an account? "}
        <span className="font-medium text-foreground">Sign-up opens soon.</span>
      </p>
    </form>
  )
}

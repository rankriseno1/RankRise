'use client'

import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { ActionButton } from '@/components/shared/button-link'
import { Disclaimer } from '@/components/shared/demo-badge'
import { TextAreaField, TextField } from '@/components/shared/form-field'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="name" label="Name" autoComplete="name" placeholder="Your name" required />
        <TextField id="email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <TextField id="subject" label="Subject" placeholder="How can we help?" required />
      <TextAreaField id="message" label="Message" placeholder="Write your message..." required />
      <ActionButton type="submit" size="lg" className="w-full sm:w-auto sm:self-start">
        <Send aria-hidden="true" />
        Send message
      </ActionButton>
      <div role="status" aria-live="polite">
        {submitted ? (
          <Disclaimer>
            Thanks! This is a preview, so messages are not sent yet. Please email us directly in the meantime.
          </Disclaimer>
        ) : null}
      </div>
    </form>
  )
}

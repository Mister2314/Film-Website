import { useState } from 'react'
import type { FormEvent } from 'react'

type FormState = 'idle' | 'sending' | 'done'

/**
 * Newsletter with real states — idle → sending → done. Static site, no backend:
 * the subscription is kept honestly on this device and the microcopy says so.
 */
export default function Newsletter() {
  const [state, setState] = useState<FormState>('idle')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (state !== 'idle') return
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('that address doesn’t look right — one more try.')
      return
    }
    setError(null)
    setState('sending')
    // No backend on a free static host: acknowledge locally after a beat.
    window.setTimeout(() => {
      try {
        localStorage.setItem('leitmotif-newsletter', value)
      } catch {
        /* private mode — still show the confirmation */
      }
      setState('done')
    }, 600)
  }

  if (state === 'done') {
    return (
      <p className="newsletter-done" role="status">
        you’re on the list. one letter per premiere — starting with the next one.
      </p>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="your email"
        autoComplete="email"
        aria-label="Email address for the newsletter"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? 'newsletter-error' : undefined}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === 'sending'}
      />
      <button className="newsletter-go" type="submit" aria-label="Subscribe" disabled={state === 'sending'}>
        {state === 'sending' ? (
          <span className="newsletter-spinner" aria-hidden="true" />
        ) : (
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 1792 1792">
            <path
              fill="currentColor"
              d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11z"
            />
          </svg>
        )}
      </button>
      {error && (
        <p className="newsletter-error" id="newsletter-error" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

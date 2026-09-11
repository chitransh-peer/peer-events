import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { pcrLogo, itilAtoLogo, peopleCertLogo } from './eventsLogos.js'
import Reveal from '../components/Reveal.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const REGISTRATION_ENDPOINT = import.meta.env.VITE_REGISTRATION_ENDPOINT

const SESSIONS = ['October 6, 1:00 PM', 'October 15, 6:00 PM']

function validate(data) {
  if (!data.firstName || !data.lastName) return 'Enter your first and last name.'
  if (!EMAIL_RE.test(data.email)) return 'Enter a valid email address.'
  if (data.cellphone.replace(/\D/g, '').length < 7) return 'Enter a phone number we can reach you on.'
  if (!data.Date) return 'Choose a session date.'
  return null
}

// Sent as text/plain (not application/json) so the browser treats it as a "simple
// request" and skips the CORS preflight — the Apps Script web app only handles
// doPost, not OPTIONS. The script itself still JSON.parses e.postData.contents.
async function submitRegistration(data) {
  const response = await fetch(REGISTRATION_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
  })

  const text = await response.text()
  return JSON.parse(text)
}

function EventsPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', cellphone: '', Date: '' })
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const loadedAt = useRef(Date.now())
  const panelRef = useRef(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('')

    if (companyWebsite !== '' || Date.now() - loadedAt.current < 1500) {
      confirmRegistration()
      return
    }

    const problem = validate(form)
    if (problem) {
      setStatus(problem)
      return
    }

    if (!REGISTRATION_ENDPOINT) {
      setStatus('Preview only. Set VITE_REGISTRATION_ENDPOINT to enable submissions.')
      return
    }

    setSubmitting(true)

    try {
      const response = await submitRegistration(form)
      setSubmitting(false)
      if (response && response.result === 'success') {
        confirmRegistration()
      } else {
        setStatus((response && response.message) || "We couldn't save your registration. Please try again.")
      }
    } catch (err) {
      setSubmitting(false)
      setStatus('Something went wrong on our side. Please try again, or email us if it keeps failing.')
      console.error(err)
    }
  }

  function confirmRegistration() {
    setDone(true)
    setForm({ firstName: '', lastName: '', email: '', cellphone: '', Date: '' })
    setCompanyWebsite('')
    if (panelRef.current) {
      panelRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Masthead */}
      <header className="flex flex-wrap items-center justify-between gap-6 bg-[#030d1a] px-6 py-4 lg:px-12">
        <img src={pcrLogo} alt="Peer Consulting Resources" width={277} height={92} className="h-11 w-auto object-contain" />

        <div className="flex items-center gap-4 rounded bg-white px-4 py-2">
          <img
            src={itilAtoLogo}
            alt="ITIL Accredited Training Organization — PeopleCert on behalf of AXELOS"
            width={334}
            height={128}
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span className="h-8 w-px self-stretch bg-gray-200 sm:h-10" />
          <img src={peopleCertLogo} alt="PeopleCert Partner" width={523} height={96} className="h-5 w-auto object-contain sm:h-6" />
        </div>
      </header>

      {/* Stage */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] px-6 py-16 lg:px-12 lg:py-24">
        <div
          className="animate-pulse-slow pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Pitch */}
          <Reveal as="div" className="text-blue-100">
            <p className="mb-4 inline-block border-b-2 border-accent pb-1.5 text-sm font-bold uppercase tracking-wider text-blue-300">
              Live webinar
            </p>

            <h1 className="mb-5 max-w-[16ch] font-display text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              ITIL<sup>®</sup> The Language to Growth
            </h1>

            <p className="mb-8 max-w-[46ch] font-body text-lg leading-relaxed text-blue-100/80">
              How service management gives IT teams and the business a shared vocabulary — and what that changes
              about the way work gets prioritised, measured and funded.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                'Where the ITIL service value system maps onto work your teams already do',
                'How the certification path runs, from Foundation to Managing Professional',
                'What accredited training and the exam actually involve, and how long they take',
              ].map((item) => (
                <li key={item} className="flex max-w-[48ch] gap-3 text-[15px] text-blue-100/90">
                  <span className="mt-2.5 h-0.5 w-3 flex-shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <dl className="flex flex-wrap gap-0 border-t border-white/15">
              {[
                ['Duration', '60 minutes'],
                ['Language', 'English'],
              ].map(([dt, dd]) => (
                <div key={dt} className="mr-7 border-r border-white/15 pr-7 pt-4 last:mr-0 last:border-r-0 last:pr-0">
                  <dt className="mb-1 text-xs font-bold text-blue-300/80">{dt}</dt>
                  <dd className="text-sm font-bold text-white">{dd}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8">
              <Link to="/" className="text-sm font-bold text-blue-300 transition-colors hover:text-white">
                &larr; Back to ITIL overview
              </Link>
            </p>
          </Reveal>

          {/* Form panel */}
          <Reveal
            as="div"
            delay={150}
            ref={panelRef}
            className={`rounded-md border-t-4 bg-white p-8 shadow-2xl transition-colors duration-500 ${done ? 'border-accent' : 'border-accent'}`}
          >
            {!done && (
              <div>
                <h2 className="mb-1 font-display text-2xl font-black text-primary">Reserve your seat</h2>
                <p className="mb-7 text-sm text-gray-500">Takes about 30 seconds.</p>

                <form noValidate onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex-1">
                      <label htmlFor="firstName" className="mb-1.5 block text-sm font-bold text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        maxLength={60}
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-200 bg-gray-50 px-3.5 py-3 text-base transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="lastName" className="mb-1.5 block text-sm font-bold text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        maxLength={60}
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-200 bg-gray-50 px-3.5 py-3 text-base transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-gray-700">
                      Work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      maxLength={120}
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-200 bg-gray-50 px-3.5 py-3 text-base transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="cellphone" className="mb-1.5 block text-sm font-bold text-gray-700">
                      Cellphone
                    </label>
                    <input
                      type="tel"
                      id="cellphone"
                      name="cellphone"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="(555) 000-0000"
                      maxLength={25}
                      required
                      value={form.cellphone}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-200 bg-gray-50 px-3.5 py-3 text-base transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="Date" className="mb-1.5 block text-sm font-bold text-gray-700">
                      Session date
                    </label>
                    <select
                      id="Date"
                      name="Date"
                      required
                      value={form.Date}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-200 bg-gray-50 px-3.5 py-3 text-base transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="" disabled>
                        Choose a session
                      </option>
                      {SESSIONS.map((session) => (
                        <option key={session} value={session}>
                          {session}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="companyWebsite">Leave this field empty</label>
                    <input
                      type="text"
                      id="companyWebsite"
                      name="companyWebsite"
                      tabIndex={-1}
                      autoComplete="off"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded bg-accent py-3.5 font-bold text-white transition-all duration-300 hover:bg-accent/90 active:scale-[0.99] disabled:cursor-progress disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Secure my spot'}
                  </button>

                  <p role="status" aria-live="polite" className="min-h-[1.2em] text-center text-sm text-red-600">
                    {status}
                  </p>
                  <p className="text-center text-xs leading-relaxed text-gray-500">
                    We'll only use your details for this session and future ITIL training from Peer Consulting
                    Resources.
                  </p>
                </form>
              </div>
            )}

            {done && (
              <div role="status" aria-live="polite" className="animate-fade-up py-2 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="mb-2 font-display text-xl font-black text-primary">You're registered</h2>
                <p className="mx-auto max-w-[38ch] text-sm text-gray-500">
                  We'll send the joining link to your email ahead of the session. If you don't see it, check your
                  spam folder.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white px-6 py-7 text-center lg:px-12">
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-gray-500">
          <span className="font-bold text-[#641e59]">
            ITIL<sup>®</sup>
          </span>{' '}
          is a registered trade mark of PeopleCert group. Used under licence from PeopleCert. All rights reserved.
          <br />
          &copy; 2026 Peer Consulting Resources Inc.
        </p>
      </footer>
    </div>
  )
}

export default EventsPage

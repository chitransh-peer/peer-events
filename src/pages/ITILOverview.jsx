import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ChatbotWidget from '../components/ChatbotWidget.jsx'
import Reveal from '../components/Reveal.jsx'

const TRUST_ITEMS = [
  { text: <><strong>PeopleCert</strong> Accredited ATO</> },
  { text: <><strong>AI-Enhanced</strong> E-Learning</> },
  { text: <><strong>Globally Recognized</strong> Certifications</> },
  { text: <>Registry ID: <strong>9550</strong> · Valid to 2029</> },
]

const FAMILIES = [
  {
    cls: 'itil',
    icon: 'settings',
    title: 'ITIL®',
    color: 'border-[#004b87]',
    bg: 'bg-[#eef1f5]',
    text: 'text-[#004b87]',
    subtitle: 'IT Service Management framework for the AI era. From Foundation to advanced Specialist tracks.',
    courses: [
      'ITIL Foundation (V5 & V4)',
      'ITIL Specialist (Product, Service, Experience…)',
      'ITIL Practice Manager',
      'ITIL AI Governance',
      'ITIL Foundation Bridge',
    ],
  },
  {
    cls: 'ai',
    icon: 'psychology',
    title: 'Artificial Intelligence',
    color: 'border-[#6a1b9a]',
    bg: 'bg-[#f3e5f5]',
    text: 'text-[#6a1b9a]',
    subtitle: 'Certifications for AI practitioners and leaders — strategy, ethics, and responsible implementation.',
    courses: ['AI Foundation', 'AI Governance & Ethics', 'AI for IT Professionals', 'AI Strategy & Leadership'],
  },
  {
    cls: 'ppm',
    icon: 'assessment',
    title: 'PPM & Agile',
    color: 'border-[#00796b]',
    bg: 'bg-[#e0f2f1]',
    text: 'text-[#00796b]',
    subtitle: 'Project & Portfolio Management and Agile delivery certifications for modern organizations.',
    courses: ['PMP® Preparation', 'PMI-ACP® (Agile Certified)', 'Scrum Master Certification', 'Portfolio Management'],
  },
]

const ACC_CARDS = [
  {
    title: 'ITIL® 4 Accreditations',
    desc: 'Authorized to deliver comprehensive ITIL 4 training, including Specialist, Strategist, and Foundation modules.',
    registryId: '9550',
    validUntil: '19/02/2029',
    pdfHref: '/docs/9550_ITIL_Peer_Consulting_Resources.pdf',
    pdfLabel: 'View Official ITIL Accreditation Letter',
  },
  {
    title: 'ITIL5 Accreditations',
    desc: 'Authorized by the DevOps Institute to deliver official DevOps Foundation programmes.',
    registryId: '9550',
    validUntil: '19/02/2029',
    pdfHref: encodeURI('/docs/[9550] - Peer Consulting Resources ITIL5.pdf'),
    pdfLabel: 'View Official ITIL5 Accreditation Letter',
  },
]

const WHY_ITEMS = [
  {
    icon: 'smart_toy',
    title: 'AI-Powered Learning',
    desc: 'Our proprietary e-learning platform adapts to your pace, generates custom quizzes, and provides smart feedback for exam readiness.',
  },
  {
    icon: 'school',
    title: 'Live Instructor-Led',
    desc: 'Expert-led online classes with real-time interaction, case studies, and practical scenarios — not just slides.',
  },
  {
    icon: 'devices',
    title: 'Self-Paced Option',
    desc: 'Learn on your schedule with our fully AI-enabled self-paced courses, accessible anytime, anywhere.',
  },
  {
    icon: 'emoji_events',
    title: 'First-Time Pass Rate',
    desc: 'Our AI-enhanced preparation approach is designed to ensure you pass your certification exam on the first attempt.',
  },
]

export default function ITILOverview() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-white font-body">
      <ChatbotWidget />

      {/* Hero */}
      <header className="page-hero relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] py-24 text-center text-white lg:py-32">
        <div
          className="animate-pulse-slow absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 55% at 100% 0%, rgba(124,58,237,0.20) 0%, transparent 70%)' }}
        />
        <div
          className="animate-pulse-slow absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 45% at 0% 100%, rgba(37,99,235,0.14) 0%, transparent 70%)',
            animationDelay: '1.5s',
          }}
        />

        <div className="container relative z-10 mx-auto w-full px-6 lg:px-12">
          <div
            className="animate-fade-up mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md"
            style={{ animationDelay: '80ms' }}
          >
            Official PeopleCert Accredited Training
          </div>

          <h1
            className="animate-fade-up mb-6 font-display text-3xl font-black tracking-tight md:text-4xl md:text-6xl"
            style={{ animationDelay: '200ms' }}
          >
            IT Training &amp; <span className="text-accent">Certifications</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mb-10 max-w-3xl font-body text-xl leading-relaxed text-blue-100/80"
            style={{ animationDelay: '340ms' }}
          >
            Advance your career with globally recognized certifications in ITIL, Artificial Intelligence, Project
            Management, and Agile — delivered with an AI-enhanced learning experience.
          </p>

          <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '480ms' }}>
            <a
              href="#families"
              className="rounded-lg bg-accent px-8 py-3.5 font-bold text-white shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/30 active:scale-95"
            >
              Explore Programs
            </a>
            <a
              href="#accreditation"
              className="rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-95"
            >
              Our Accreditations
            </a>
            <Link
              to="/events"
              className="rounded-lg border border-accent/60 bg-accent/20 px-8 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-accent/30 active:scale-95"
            >
              Register for Webinar
            </Link>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="border-b border-gray-100 bg-white py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {TRUST_ITEMS.map((item, i) => (
              <Reveal key={i} delay={i * 90} className="flex items-center gap-3 text-sm text-gray-600">
                <span>{item.text}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Families */}
      <section id="families" className="bg-primary-light py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Our Training Portfolio</p>
            <h2 className="mb-6 font-display text-[26px] font-black tracking-tight text-primary sm:text-4xl md:text-5xl">
              Three Certification Families
            </h2>
            <p className="font-body leading-relaxed text-gray-600">
              Choose from our three core program families, each combining official accredited content with our
              proprietary AI-powered learning platform.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FAMILIES.map((fam, i) => (
              <Reveal
                as="div"
                key={fam.cls}
                delay={i * 140}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-subtle transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-lg"
              >
                <div className={`p-8 ${fam.bg} border-b-4 ${fam.color}`}>
                  <span className={`material-icons mb-4 text-3xl md:text-4xl ${fam.text}`}>{fam.icon}</span>
                  <h3 className="mb-2 font-display text-2xl font-black text-primary">{fam.title}</h3>
                  <p className="flex-grow text-sm leading-relaxed text-gray-600">{fam.subtitle}</p>
                </div>
                <div className="flex flex-grow flex-col p-8">
                  <ul className="space-y-4 text-sm font-medium text-gray-700">
                    {fam.courses.map((course, ci) => (
                      <li key={ci} className="flex items-center gap-3">
                        <span className={`material-icons text-xs ${fam.text}`}>arrow_forward</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section id="accreditation" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Why Trust Us</p>
            <h2 className="mb-6 font-display text-[26px] font-black tracking-tight text-primary sm:text-4xl md:text-5xl">
              Official PeopleCert Training Partner
            </h2>
            <p className="font-body leading-relaxed text-gray-600">
              Peer Consulting Resources, Inc. is an official Affiliate of IT Expert — an Accredited Training
              Organization of PeopleCert. We fulfill PeopleCert's strict requirements to deliver world-class, fully
              accredited training programmes.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {ACC_CARDS.map((card, i) => (
              <Reveal
                key={i}
                delay={i * 140}
                className="flex h-full flex-col rounded-2xl border-t-8 border-accent bg-primary-light p-8 shadow-subtle transition-transform duration-500 ease-out hover:-translate-y-1"
              >
                <h3 className="mb-4 font-display text-xl font-black text-primary">{card.title}</h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600">{card.desc}</p>
                <div className="mb-6 space-y-2">
                  <p className="text-sm font-medium">
                    <span className="text-gray-500">Registry ID:</span> {card.registryId}
                  </p>
                  <p className="text-sm font-medium">
                    <span className="text-gray-500">Valid Until:</span> {card.validUntil}
                  </p>
                </div>
                <a
                  href={card.pdfHref}
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-icons text-sm">picture_as_pdf</span>
                  {card.pdfLabel}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Peer */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">The Peer Advantage</p>
            <h2 className="mb-16 font-display text-[26px] font-black tracking-tight text-primary sm:text-4xl md:text-5xl">
              Why Learn with Peer Consulting?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 110}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-subtle transition-transform duration-500 ease-out hover:-translate-y-1.5"
              >
                <span className="material-icons mb-6 text-3xl leading-none text-accent md:text-4xl">{item.icon}</span>
                <h4 className="mb-3 font-display text-lg font-black text-primary">{item.title}</h4>
                <p className="flex-grow text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar callout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#030d1a] via-[#080f2e] to-[#150833] py-20 text-center text-white">
        <div
          className="animate-pulse-slow absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 90% 100%, rgba(37,99,235,0.22) 0%, transparent 70%)' }}
        />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-300">Live webinar</p>
            <h2 className="mb-4 font-display text-2xl font-black tracking-tight md:text-4xl">
              ITIL® — The Language to Growth
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100/80">
              Join our live webinar to see how ITIL maps onto the work your teams already do.
            </p>
            <Link
              to="/events"
              className="inline-block rounded-lg bg-accent px-8 py-3.5 font-bold text-white shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/30 active:scale-95"
            >
              Reserve your seat
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Corporate badge */}
      <section className="border-t border-gray-100 bg-white py-12">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <p className="mx-auto max-w-3xl font-body text-xs italic leading-relaxed text-gray-500">
            ITIL® is a registered trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights
            reserved.
          </p>
        </div>
      </section>
    </div>
  )
}

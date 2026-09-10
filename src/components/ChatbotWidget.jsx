import { useState } from 'react'

function ChatbotWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-body">
      {open && (
        <div className="animate-fade-up w-72 rounded-2xl border border-gray-100 bg-white p-5 shadow-subtle">
          <p className="mb-1 text-sm font-bold text-primary">Need help choosing a course?</p>
          <p className="text-xs leading-relaxed text-gray-500">
            Ask us about ITIL, AI or PPM &amp; Agile certifications — a training advisor will follow up by email.
          </p>
          <a
            href="/events"
            className="mt-4 inline-block w-full rounded-lg bg-accent px-4 py-2 text-center text-xs font-bold text-white transition-transform active:scale-95"
          >
            Talk to an advisor
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="animate-float flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-subtle transition-transform hover:scale-110 active:scale-95"
      >
        <span className="material-icons">{open ? 'close' : 'chat'}</span>
      </button>
    </div>
  )
}

export default ChatbotWidget

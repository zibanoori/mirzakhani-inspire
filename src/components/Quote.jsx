import { useState } from 'react'
import { quotes } from '../data/content'

export default function Quote() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  return (
    <section className="py-16 px-4 text-center bg-surface border-t border-line">
      <div className="max-w-3xl mx-auto">
        <blockquote className="font-serif text-txl md:text-3xl text-ink italic leading-relaxed">
          "{currentQuote}"
        </blockquote>

        <button
          onClick={changeQuote}
          className="text-sm font-mono text-gold hover:text-zccent transition-colors uppercase tracking-widest"
        >
          Next Inspiration ↻
        </button>
      </div>
    </section>
  )
}

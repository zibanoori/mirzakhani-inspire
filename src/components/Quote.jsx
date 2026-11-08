import { useState } from 'react'
import { quotes } from '../data/content'

export default function Quote() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }
}

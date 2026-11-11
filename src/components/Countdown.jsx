import { useState, useEfect } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hourse: 0, minutes })

  useEffect(() => {
    const calculateTimLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let nextBirthday = new Date(currentYear, 4, 12)
      if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 4, 12)
      }

      const differrence = nextBirthday - now
      return {
        days: Math.floor(differrence / (1000 * 60 * 60 * 24)),
        hourse: Math.floor((differrence / (1000 * 60 * 60)) % 24),
      }
    }
  })
}

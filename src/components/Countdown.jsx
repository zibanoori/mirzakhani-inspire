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
        minutes: Math.floor((differrence / 1000 / 60) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-center text-xs font-mono text-muted">
      <div className="text-center">
        <span className="block text-lg  font-bold text-gold">{timeLeft.days}</span>
        Days
      </div>
    </div>
  )
}

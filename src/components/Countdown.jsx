import { useState, useEffect } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let nextBirthday = new Date(currentYear, 4, 12)

      if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 4, 12)
      }

      const difference = nextBirthday - now

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
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
        <span className="block text-lg font-bold text-gold">{timeLeft.days}</span>
        Days
      </div>
      <div className="text-center">
        <span className="block text-lg font-bold text-gold">{timeLeft.hours}</span>
        Hours
      </div>
      <div className="text-center">
        <span className="block text-lg font-bold text-gold">{timeLeft.minutes}</span>
        Mins
      </div>
    </div>
  )
}

export default Countdown

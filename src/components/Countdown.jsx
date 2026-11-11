import { useState, useEfect } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hourse: 0, minutes })

  useEffect(() => {
    const calculateTimLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let nextBirthday = new Date(currentYear, 4, 12)
    }
  })
}

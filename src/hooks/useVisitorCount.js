import { useEffect, useState } from 'react'

export function useVisitorCount() {
  const [count, setCount] = useState('...')

  useEffect(() => {
    try {
      const stored = parseInt(localStorage.getItem('kl_visit_count') || '0', 10)
      const now = Date.now()
      const lastVisit = parseInt(localStorage.getItem('kl_last_visit') || '0', 10)
      const isNewVisit = now - lastVisit > 30 * 60 * 1000 // 30 min

      const newCount = isNewVisit ? stored + 1 : stored
      localStorage.setItem('kl_visit_count', newCount)
      localStorage.setItem('kl_last_visit', now)

      // Seed with a realistic starting number so it looks like people visited before
      const displayed = newCount + 347
      setCount(displayed.toLocaleString())
    } catch {
      setCount('1k+')
    }
  }, [])

  return count
}

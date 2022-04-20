import { formattedDate } from './utils'

const KEY = 'streak'

interface Streak {
  currentCount: number
  startDate: string
  lastLoginDate: string
}

export function streakCounter(storage: Storage, date: Date): Streak {
  const streak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  }

  storage.setItem(KEY, JSON.stringify(streak))
  return streak
}

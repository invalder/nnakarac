export interface DateRange {
  startDate: string
  endDate?: string
}

export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  const parts = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)

  return parts.length > 0 ? parts.join(' ') : '< 1 mo'
}

export function formatPeriod(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const startStr = start.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })

  let endStr = 'Present'
  if (endDate) {
    const end = new Date(endDate)
    endStr = end.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  const duration = calculateDuration(startDate, endDate)

  return `${startStr} - ${endStr} · ${duration}`
}

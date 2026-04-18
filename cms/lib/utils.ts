import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { formatDate as formatDateFns } from 'date-fns'
import { es } from 'date-fns/locale'
import slug from 'slugify'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return slug(text, { lower: true, strict: true, locale: 'es' })
}

export function formatDate(date: Date | string, format = 'PPP'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return formatDateFns(d, format, { locale: es })
}

export function formatReadingTime(text: string): string {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

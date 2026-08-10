import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string) {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path
  }
  const basePath = '/PORTFOLIO'
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}


'use client'

import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

const links = [
  {
    id: 'home',
    text: 'خانه',
  },
  {
    id: 'about',
    text: 'درباره من',
  },
  {
    id: 'work',
    text: 'نمونه کارها',
  },
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home')
  const isManualScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when the section occupies the upper-middle region of the viewport
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      if (isManualScrolling.current) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    links.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // Disable observer updates during smooth scroll
    isManualScrolling.current = true
    setActiveSection(id)

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    // Clear any existing timeout
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)

    // Re-enable observer after smooth scroll animation completes (~800ms)
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false
    }, 800)
  }

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base">
        {links.map((link) => {
          const isActive = activeSection === link.id
          return (
            <a
              key={link.id}
              className={clsx(
                'hover:border-border rounded-base border-2 px-2 py-1 transition-colors cursor-pointer select-none',
                isActive ? 'border-border' : 'border-transparent',
              )}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.text}
            </a>
          )
        })}
        <ThemeSwitcher />
      </nav>
    </div>
  )
}

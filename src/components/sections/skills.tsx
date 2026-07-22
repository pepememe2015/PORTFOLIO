'use client'

import { useState, useEffect } from 'react'
import SKILLS from '@/data/skills'

export default function Skills() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">مهارت‌ها</h2>

      <div className="flex flex-col gap-10">
        {SKILLS.map((item, id) => {
          return (
            <div key={id}>
              <h3 className="mb-6 text-lg font-heading sm:text-xl">
                {item.field}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {item.skills.map((skill, idx) => {
                  const Icon = skill.icon
                  // Extract name and percentage value from string like "Adobe Illustrator (۸۰٪)"
                  const match = skill.skill.match(/(.*?)\s*\(([^)]*[۰-۹0-9]+[٪%])\)$/)
                  const name = match ? match[1] : skill.skill
                  const pctText = match ? match[2] : ''
                  
                  // Convert Farsi digits to English numbers for progress bar width
                  const farsiToEng = (str: string) => {
                    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
                    return str.replace(/[۰-۹]/g, (w) => farsiDigits.indexOf(w).toString())
                  }
                  
                  const pctValue = pctText ? parseInt(farsiToEng(pctText).replace('٪', '')) : 50

                  return (
                    <div 
                      key={idx} 
                      className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-4 sm:p-5 flex flex-col gap-3.5 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
                    >
                      <div className="flex items-center justify-between text-foreground">
                        <div className="flex items-center gap-3">
                          <Icon className="h-6 w-6 text-main animate-pulse" />
                          <span className="font-heading text-sm sm:text-base">{name}</span>
                        </div>
                        {/* Percentage badge removed as requested */}
                      </div>
                      
                      {/* Neobrutalist Progress Bar */}
                      <div className="w-full bg-background border-2 border-border h-4 rounded-full p-[2px] overflow-hidden">
                        <div 
                          className="h-full bg-main border border-border rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isMounted ? `${pctValue}%` : '0%' }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

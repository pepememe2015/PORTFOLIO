'use client'

import { useState } from 'react'
import { SiGmail } from '@icons-pack/react-simple-icons'
import { Copy, ExternalLink, Check } from 'lucide-react'

export default function Links() {
  const email = 'amirhaghighati84@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="mt-16 w-full">
      <h2 className="mb-6 text-xl font-heading sm:text-2xl">ارتباط با من</h2>
      
      <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 flex flex-col w-full overflow-hidden">
        {/* Envelope Airmail Stripe Top Bar */}
        <div 
          className="h-3 w-full border-b-2 border-border" 
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, #FF6B6B, #FF6B6B 10px, #ffffff 10px, #ffffff 20px, #39829B 20px, #39829B 30px, #ffffff 30px, #ffffff 40px)'
          }}
        />

        {/* Card Content Container */}
        <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-base border-2 border-border bg-main text-main-foreground flex items-center justify-center shadow-[2px_2px_0px_0px_var(--border)] select-none shrink-0">
              <SiGmail className="h-6 w-6" title="Gmail" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading text-xs sm:text-sm text-foreground/75">پست الکترونیکی</span>
              <span className="font-mono text-sm sm:text-base font-bold text-foreground select-all truncate">{email}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 border-border bg-main text-main-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-0 active:translate-y-0 rounded-base border-2 px-4 py-2 text-sm font-heading transition-all cursor-pointer select-none"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  کپی شد!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  کپی آدرس
                </>
              )}
            </button>

            {/* Open Gmail Button */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 border-border bg-secondary-background text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-0 active:translate-y-0 rounded-base border-2 px-4 py-2 text-sm font-heading transition-all cursor-pointer select-none"
            >
              <ExternalLink className="h-4 w-4" />
              جیمیل تحت وب
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

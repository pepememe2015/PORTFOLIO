'use client'

import { useState, useEffect } from 'react'
import { Loader2, AlertCircle, RotateCw } from 'lucide-react'

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  showBlurBg?: boolean
  containerClassName?: string
}

export function ProgressiveImage({
  src,
  alt,
  className = '',
  showBlurBg = true,
  containerClassName = '',
  ...props
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [progress, setProgress] = useState(12)

  useEffect(() => {
    setLoaded(false)
    setError(false)
    setProgress(12)

    // Smooth simulated progress while fetching image over network
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) {
          return 92
        }
        return prev + Math.floor(Math.random() * 14 + 6)
      })
    }, 90)

    // Preload image object
    const img = new Image()
    img.src = src

    if (img.complete && img.naturalWidth !== 0) {
      clearInterval(interval)
      setProgress(100)
      setLoaded(true)
    } else {
      img.onload = () => {
        clearInterval(interval)
        setProgress(100)
        setLoaded(true)
      }
      img.onerror = () => {
        clearInterval(interval)
        setError(true)
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [src])

  const handleRetry = (e: React.MouseEvent) => {
    e.stopPropagation()
    setError(false)
    setLoaded(false)
    setProgress(20)
    const img = new Image()
    img.src = `${src}?retry=${Date.now()}`
    img.onload = () => {
      setProgress(100)
      setLoaded(true)
    }
    img.onerror = () => {
      setError(true)
    }
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-secondary-background ${containerClassName}`}>
      {/* Loading overlay with Neobrutalism progress badge */}
      {!loaded && !error && (
        <div className="absolute inset-0 z-30 bg-secondary-background flex flex-col items-center justify-center gap-4 select-none p-4">
          {/* Animated Skeleton Pulse Box */}
          <div className="absolute inset-4 rounded-base border-2 border-border/30 bg-main/5 animate-pulse pointer-events-none" />

          {/* Centered Neobrutalist Badge */}
          <div className="relative z-40 flex items-center gap-2.5 bg-main text-main-foreground border-2 border-border shadow-[4px_4px_0px_0px_var(--border)] rounded-base px-4 py-2 font-heading text-xs sm:text-sm">
            <Loader2 className="h-4.5 w-4.5 animate-spin text-main-foreground shrink-0" />
            <span>در حال بارگذاری...</span>
            <span className="font-mono font-bold text-main-foreground dir-ltr">
              {progress}%
            </span>
          </div>

          {/* Animated Progress Bar */}
          <div className="relative z-40 w-52 max-w-[70%] bg-background border-2 border-border h-4 rounded-full p-[2px] overflow-hidden shadow-[2px_2px_0px_0px_var(--border)]">
            <div
              className="h-full bg-main border border-border rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 z-30 bg-secondary-background flex flex-col items-center justify-center gap-3 p-4 select-none">
          <div className="flex items-center gap-2 text-destructive font-heading text-sm bg-background border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] px-3 py-1.5 rounded-base">
            <AlertCircle className="h-5 w-5" />
            <span>خطا در دریافت تصویر</span>
          </div>
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 border-border bg-main text-main-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-0 active:translate-y-0 rounded-base border-2 px-3.5 py-1.5 text-xs font-heading transition-all cursor-pointer z-40"
          >
            <RotateCw className="h-3.5 w-3.5" />
            <span>تلاش مجدد</span>
          </button>
        </div>
      )}

      {/* Blurred Ambient Background */}
      {showBlurBg && (
        <img
          className={`absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 dark:opacity-25 scale-110 pointer-events-none transition-opacity duration-500 ${
            loaded ? 'opacity-40 dark:opacity-25' : 'opacity-0'
          }`}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Actual Image */}
      <img
        {...props}
        className={`${className} transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        src={src}
        alt={alt}
        onLoad={() => {
          setProgress(100)
          setLoaded(true)
        }}
        onError={() => setError(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

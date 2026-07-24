'use client'

import { useState, useEffect, useRef } from 'react'
import PROJECTS, { Project } from '@/data/projects'
import { ChevronRight, ChevronLeft, X, Maximize2 } from 'lucide-react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(videoElement)
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={isInView ? src : undefined}
      className={className}
      {...props}
    />
  )
}

interface ProjectCardProps {
  project: Project
  onOpenLightbox: (index: number) => void
}

function ProjectCard({ project, onOpenLightbox }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    if (project.assets) {
      setCurrentIndex((prev) => (prev === 0 ? project.assets!.length - 1 : prev - 1))
    }
  }

  const handleNext = () => {
    if (project.assets) {
      setCurrentIndex((prev) => (prev === project.assets!.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <div className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5 flex flex-col gap-4">
      {project.badge && (
        <div className="w-max border-border bg-secondary-background text-foreground rounded-base border-2 px-2.5 py-1 text-xs font-heading">
          {project.badge}
        </div>
      )}

      {/* Main Preview (Iframe or Slider) */}
      {project.isIframe ? (
        <div className="border-border shadow-shadow rounded-base border-2 overflow-hidden bg-white h-[500px]">
          <iframe
            className="w-full h-full border-none"
            src={project.iframeUrl}
            title={project.name}
            loading="lazy"
          />
        </div>
      ) : project.assets ? (
        <div
          onClick={() => onOpenLightbox(currentIndex)}
          className="relative border-border shadow-shadow rounded-base border-2 overflow-hidden bg-secondary-background h-[380px] cursor-zoom-in group select-none"
          dir="ltr"
        >
          {/* Slide container */}
          <div
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
          >
            {project.assets.map((asset, idx) => {
              const isNearActive = Math.abs(idx - currentIndex) <= 1
              return (
                <div
                  key={idx}
                  className="w-full h-full flex-shrink-0 flex-grow-0 relative flex items-center justify-center overflow-hidden"
                >
                  {isNearActive && (
                    asset.type === 'video' ? (
                      <>
                        {/* Blurred Dynamic Video Glow */}
                        <LazyVideo
                          key={`${asset.url}-glow`}
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 dark:opacity-20 scale-110 pointer-events-none"
                          src={asset.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <LazyVideo
                          key={asset.url}
                          className="w-full h-full object-contain z-10 relative pointer-events-none bg-transparent"
                          src={asset.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </>
                    ) : (
                      <>
                        {/* Blurred Ambient Background */}
                        <img
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 dark:opacity-25 scale-110 pointer-events-none"
                          src={asset.url}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <img
                          className="w-full h-full object-contain z-10 relative pointer-events-none"
                          src={asset.url}
                          alt={`${project.name} - ${idx + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </>
                    )
                  )}
                </div>
              )
            })}
          </div>

          {/* Zoom Indicator in Top-Right Corner */}
          <div className="absolute top-3 right-3 z-20 pointer-events-none bg-main text-main-foreground border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] p-2 rounded-base group-hover:scale-110 transition-transform">
            <Maximize2 className="h-4 w-4" />
          </div>

          {/* Navigation Controls */}
          {project.assets.length > 1 && (
            <>
              {/* Prev Button (Right arrow in RTL) */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  className="border-border bg-main text-main-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-0 active:translate-y-0 rounded-base border-2 p-1.5 transition-all cursor-pointer"
                  aria-label="عکس بعدی"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Next Button (Left arrow in RTL) */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 z-30">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrev()
                  }}
                  className="border-border bg-main text-main-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-0 active:translate-y-0 rounded-base border-2 p-1.5 transition-all cursor-pointer"
                  aria-label="عکس قبلی"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>

              {/* Slider Dots/Indicators */}
              <div
                dir="ltr"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 px-2.5 py-1 rounded-full text-white text-xs font-mono select-none z-30"
              >
                {currentIndex + 1} / {project.assets.length}
              </div>
            </>
          )}
        </div>
      ) : null}

      <div className="text-main-foreground font-base mt-2">
        <h2 className="font-heading text-xl sm:text-2xl">
          {project.name}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default function Work() {
  const [activeLightbox, setActiveLightbox] = useState<{ project: Project; index: number } | null>(null)

  const handleLightboxPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (activeLightbox) {
      const { project, index } = activeLightbox
      const prevIndex = index === 0 ? project.assets!.length - 1 : index - 1
      setActiveLightbox({ project, index: prevIndex })
    }
  }

  const handleLightboxNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (activeLightbox) {
      const { project, index } = activeLightbox
      const nextIndex = index === project.assets!.length - 1 ? 0 : index + 1
      setActiveLightbox({ project, index: nextIndex })
    }
  }

  useEffect(() => {
    if (!activeLightbox) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null)
      } else if (e.key === 'ArrowLeft') {
        // Left arrow goes backward/prev
        setActiveLightbox((prev) => {
          if (!prev) return null
          const prevIndex = prev.index === 0 ? prev.project.assets!.length - 1 : prev.index - 1
          return { project: prev.project, index: prevIndex }
        })
      } else if (e.key === 'ArrowRight') {
        // Right arrow goes forward/next
        setActiveLightbox((prev) => {
          if (!prev) return null
          const nextIndex = prev.index === prev.project.assets!.length - 1 ? 0 : prev.index + 1
          return { project: prev.project, index: nextIndex }
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeLightbox])

  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">نمونه کارها</h1>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, id) => {
          return (
            <ProjectCard
              key={id}
              project={project}
              onOpenLightbox={(index) => {
                if (project.assets) {
                  setActiveLightbox({ project, index })
                }
              }}
            />
          )
        })}
      </div>

      {/* Lightbox Slideshow Modal */}
      {activeLightbox && activeLightbox.project.assets && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setActiveLightbox(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-4 right-4 border-border bg-main text-main-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-0 active:translate-y-0 rounded-base border-2 p-2 transition-all cursor-pointer z-50"
            aria-label="بستن"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Lightbox Media Container */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center select-none">
            {/* Sliding viewport */}
            <div className="w-full max-h-[85vh] overflow-hidden" dir="ltr">
              <div
                className="flex w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translate3d(-${activeLightbox.index * 100}%, 0, 0)` }}
              >
                {activeLightbox.project.assets.map((asset, idx) => {
                  const isNearActive = Math.abs(idx - activeLightbox.index) <= 1
                  return (
                    <div
                      key={idx}
                      className="w-full flex-shrink-0 flex items-center justify-center px-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isNearActive && (
                        asset.type === 'video' ? (
                          <div className="relative max-w-full max-h-[80vh] border-border border-4 rounded-base bg-secondary-background shadow-[8px_8px_0px_0px_var(--border)] overflow-hidden flex items-center justify-center">
                            {/* Blurred Dynamic Video Glow */}
                            <video
                              key={`${asset.url}-glow`}
                              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 dark:opacity-25 scale-110 pointer-events-none"
                              src={asset.url}
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                            <video
                              key={asset.url}
                              className="max-w-full max-h-[75vh] object-contain z-10 relative bg-transparent"
                              src={asset.url}
                              controls
                              autoPlay
                              loop
                              playsInline
                            />
                          </div>
                        ) : (
                          <div className="relative max-w-full max-h-[80vh] border-border border-4 rounded-base bg-secondary-background shadow-[8px_8px_0px_0px_var(--border)] overflow-hidden flex items-center justify-center">
                            {/* Blurred Ambient Background */}
                            <img
                              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 dark:opacity-25 scale-110 pointer-events-none"
                              src={asset.url}
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                            <img
                              className="max-w-full max-h-[75vh] object-contain z-10 relative"
                              src={asset.url}
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        )
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Arrows inside Lightbox */}
            {activeLightbox.project.assets.length > 1 && (
              <>
                 {/* Prev Button (Right arrow in RTL) */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
                  <button
                    onClick={handleLightboxNext}
                    className="border-border bg-main text-main-foreground shadow-[4px_4px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-0 active:translate-y-0 rounded-base border-2 p-2.5 transition-all cursor-pointer"
                    aria-label="بعدی"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Next Button (Left arrow in RTL) */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
                  <button
                    onClick={handleLightboxPrev}
                    className="border-border bg-main text-main-foreground shadow-[4px_4px_0px_0px_var(--border)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-0 active:translate-y-0 rounded-base border-2 p-2.5 transition-all cursor-pointer"
                    aria-label="قبلی"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                </div>

                {/* Slide Count Indicator */}
                <div
                  dir="ltr"
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-1.5 rounded-full text-white text-sm font-mono select-none border border-white/20 z-50"
                >
                  {activeLightbox.index + 1} / {activeLightbox.project.assets.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

import Links from '@/components/links'
import { Sparkles, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="font-base flex flex-col gap-8">
      {/* Neobrutalist Hero Card */}
      <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden">
        
        {/* Floating Neobrutalist Abstract Shapes (Layered behind text) */}
        
        {/* 1. Top-Left Dashed Circle */}
        <div className="absolute -top-12 -left-12 w-24 sm:w-28 h-24 sm:h-28 bg-main/5 rounded-full border-2 border-border dark:border-foreground/30 border-dashed pointer-events-none select-none z-0" />
        
        {/* 2. Top-Left Rotating Yellow Star */}
        <div className="absolute top-8 left-5 sm:left-24 animate-[spin_10s_linear_infinite] pointer-events-none select-none z-0 block">
          <Star className="h-6 sm:h-8 w-6 sm:w-8 text-[#F4D068] fill-[#F4D068] stroke-border stroke-2 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
        </div>

        {/* 3. Middle-Left Floating Capsule */}
        <div className="absolute top-[40%] left-3 sm:left-14 w-4 sm:w-6 h-8 sm:h-12 bg-main border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] rounded-full rotate-45 pointer-events-none select-none z-0 block" />

        {/* 4. Bottom-Left Abstract Cube */}
        <div className="absolute bottom-8 left-4 sm:left-20 w-5 sm:w-8 h-5 sm:h-8 bg-[#FF6B6B] border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] rounded-base -rotate-12 pointer-events-none select-none z-0 block" />

        {/* 5. Geometric Grid Patch in Background */}
        <div className="absolute bottom-4 right-4 w-28 h-20 opacity-[0.06] pointer-events-none select-none z-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:10px_10px]" />

        {/* 6. Decorative math characters */}
        <div className="absolute top-16 right-1/4 text-lg font-bold font-mono text-foreground/20 pointer-events-none select-none z-0">+</div>
        <div className="absolute bottom-16 right-1/3 text-xl font-bold font-mono text-foreground/15 pointer-events-none select-none z-0">×</div>

        {/* Content Wrapper (Ensures text layers above background shapes, with left padding on mobile to create a clear margin gutter for the shapes) */}
        <div className="relative z-10 flex flex-col gap-4 pl-6 sm:pl-0 sm:max-w-[75%]">
          <div className="flex items-center gap-3">
            <div className="bg-main text-main-foreground border border-border rounded-base p-1.5 shadow-[1px_1px_0px_0px_var(--border)] select-none">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-heading text-xs sm:text-sm text-foreground/80 tracking-wide bg-main/10 px-2 py-0.5 border border-border/20 rounded-full">
              پورتفولیو رسمی
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl font-heading mt-2 leading-tight">
            امیر عباس حقیقتی
          </h1>
          
          <p className="text-sm sm:text-lg font-heading text-main -mt-1">
            طراح و گرافیست / توسعه‌دهنده وب
          </p>
          
          <hr className="border-border border-t-2 my-2" />

          <div className="text-base sm:text-lg leading-relaxed flex flex-col gap-4">
            <p>
              سلام! من امیر عباس حقیقتی هستم؛ دانشجوی ترم ۵ رشته ارتباط تصویری دانشگاه آزاد اسلامی تهران مرکزی، طراح و گرافیست و توسعه‌دهنده وب با رویکرد Vibe Coding.
            </p>
          </div>
        </div>
      </div>

      <Links />
    </div>
  )
}

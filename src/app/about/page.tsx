import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import { GraduationCap, User, Calendar } from 'lucide-react'

export default function About() {
  return (
    <div className="font-base flex flex-col gap-6">
      <h1 className="mb-2 text-2xl font-heading sm:text-4xl">درباره من</h1>

      {/* Biography Intro Card */}
      <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-5 sm:p-6 relative overflow-hidden flex flex-col gap-3">
        {/* Hollow Donut Ring Shape (Unique to this page) */}
        <div className="absolute top-6 left-6 w-7 h-7 rounded-full border-4 border-border dark:border-foreground bg-transparent pointer-events-none select-none z-0 block" />
        
        {/* Pink Diamond Shape (Unique to this page) */}
        <div className="absolute bottom-6 left-12 w-5 h-5 bg-[#FFAEBC] border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] rotate-45 pointer-events-none select-none z-0 block" />

        <div className="flex items-center gap-2.5 z-10">
          <div className="w-8 h-8 rounded-base border border-border bg-main text-main-foreground flex items-center justify-center shadow-[1px_1px_0px_0px_var(--border)] shrink-0 select-none">
            <User className="h-4.5 w-4.5" />
          </div>
          <h2 className="text-base sm:text-lg font-heading">من کیستم؟</h2>
        </div>

        <div className="z-10 text-sm sm:text-base leading-relaxed pl-10 sm:pl-0">
          <p>
            دانشجوی ترم ۵ رشته ارتباط تصویری با تجربه کار به عنوان گرافیست و طراح گرافیک در پروژه‌های مختلف. مسلط به اصول طراحی بصری، طراحی پوسترهای تبلیغاتی، هویت بصری کمپین‌ها و طراحی لوگو. علاقه‌مند به تلفیق هنر طراحی گرافیک با برنامه‌نویسی و توسعه وب به روش Vibe Coding با بهره‌گیری از ابزارهای هوش مصنوعی.
          </p>
        </div>
      </div>

      {/* Education Card */}
      <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-5 sm:p-6 relative overflow-hidden flex flex-col gap-4">
        {/* Green Arch Shape (Unique to this page) */}
        <div className="absolute top-6 left-8 w-8 h-4 bg-[#4EAA84] border-2 border-border rounded-t-full rotate-90 pointer-events-none select-none z-0 block" />
        
        {/* Yellow Starburst/Cross (Unique to this page) */}
        <div className="absolute bottom-6 left-14 text-[#F4D068] font-bold text-lg pointer-events-none select-none z-0 block">✦</div>

        <div className="flex items-center gap-2.5 z-10">
          <div className="w-8 h-8 rounded-base border border-border bg-main text-main-foreground flex items-center justify-center shadow-[1px_1px_0px_0px_var(--border)] shrink-0 select-none">
            <GraduationCap className="h-4.5 w-4.5" />
          </div>
          <h2 className="text-base sm:text-lg font-heading">تحصیلات</h2>
        </div>

        <div className="z-10 flex flex-col gap-2 pl-12 sm:pl-0">
          <h3 className="text-sm sm:text-base font-heading text-foreground">
            کارشناسی ارتباط تصویری (گرافیک)
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-0.5">
            <span className="font-mono text-xs font-bold bg-main/10 text-main border border-main/20 rounded-base px-2 py-0.5 select-none flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              مهر ۱۴۰۳ - اکنون
            </span>
            <span className="text-xs sm:text-sm text-foreground/80">
              دانشگاه آزاد اسلامی واحد تهران مرکزی
            </span>
          </div>
        </div>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}

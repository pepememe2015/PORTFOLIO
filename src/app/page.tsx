import Links from '@/components/links'
import { Sparkles, Star, GraduationCap, User, Calendar } from 'lucide-react'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import Work from '@/components/sections/work'
import { withBasePath } from '@/lib/utils'

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Section 1: Home */}
      <section id="home" className="scroll-mt-32 font-base flex flex-col gap-8">
        {/* Neobrutalist Hero Card */}
        <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden">
          
          {/* Floating Neobrutalist Abstract Shapes */}
          <div className="absolute -top-12 -left-12 w-24 sm:w-28 h-24 sm:h-28 bg-main/5 rounded-full border-2 border-border dark:border-foreground/30 border-dashed pointer-events-none select-none z-0" />
          
          <div className="absolute top-8 left-5 sm:left-24 animate-[spin_10s_linear_infinite] pointer-events-none select-none z-20 block">
            <Star className="h-6 sm:h-8 w-6 sm:w-8 text-[#F4D068] fill-[#F4D068] stroke-border stroke-2 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
          </div>

          <div className="absolute top-[40%] left-3 sm:left-14 w-4 sm:w-6 h-8 sm:h-12 bg-main border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] rounded-full rotate-45 pointer-events-none select-none z-0 block" />

          <div className="absolute bottom-8 left-4 sm:left-20 w-5 sm:w-8 h-5 sm:h-8 bg-[#FF6B6B] border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] rounded-base -rotate-12 pointer-events-none select-none z-0 block" />

          <div className="absolute bottom-4 right-4 w-28 h-20 opacity-[0.06] pointer-events-none select-none z-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:10px_10px]" />

          <div className="absolute top-16 right-1/4 text-lg font-bold font-mono text-foreground/20 pointer-events-none select-none z-0">+</div>
          <div className="absolute bottom-16 right-1/3 text-xl font-bold font-mono text-foreground/15 pointer-events-none select-none z-0">×</div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
            {/* Text Content */}
            <div className="flex flex-col gap-4 md:max-w-[65%] w-full">
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

            {/* Profile Image (Blob) */}
            <div className="relative shrink-0 select-none md:mt-2">
              {/* Outer decorative solid shadow blob */}
              <div className="absolute inset-0 bg-border translate-x-2 translate-y-2 z-0 animate-morph" />
              {/* Blob Image Container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 border-2 border-border overflow-hidden bg-main z-10 animate-morph">
                <img 
                  src={withBasePath('/penguin.jpg')} 
                  alt="امیر عباس حقیقتی" 
                  className="w-full h-full object-cover scale-135"
                />
              </div>
            </div>
          </div>
        </div>

        <Links />
      </section>

      {/* Section 2: About Me */}
      <section id="about" className="scroll-mt-32 font-base flex flex-col gap-6">
        <h1 className="mb-2 text-2xl font-heading sm:text-4xl">درباره من</h1>

        {/* Biography Intro Card */}
        <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-5 sm:p-6 relative overflow-hidden flex flex-col gap-3">
          <div className="absolute top-6 left-6 w-7 h-7 rounded-full border-4 border-border dark:border-foreground bg-transparent pointer-events-none select-none z-0 block" />
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
          <div className="absolute top-6 left-8 w-8 h-4 bg-[#4EAA84] border-2 border-border rounded-t-full rotate-90 pointer-events-none select-none z-0 block" />
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
      </section>

      {/* Section 3: Work / Portfolio */}
      <section id="work" className="scroll-mt-32">
        <Work />
      </section>
    </div>
  )
}

import PAST_ROLES from '@/data/experience'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">سوابق شغلی</h2>

      <div className="flex flex-col gap-6">
        {PAST_ROLES.map((role, id) => {
          return (
            <div 
              key={id}
              className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-5 sm:p-6 relative overflow-hidden flex flex-col gap-2 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
            >
              {/* Unique shape: small cylinder inside the job card */}
              <div className="absolute top-6 left-6 w-3 h-8 bg-[#FFAEBC] border-2 border-border rounded-full rotate-12 pointer-events-none select-none z-0 hidden sm:block" />

              <div className="flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-base border border-border bg-main text-main-foreground flex items-center justify-center shadow-[1px_1px_0px_0px_var(--border)] shrink-0 select-none">
                  <Briefcase className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base sm:text-lg font-heading text-foreground">
                  {role.role} در {role.company}
                </h3>
              </div>

              <div className="z-10 flex flex-col gap-2 pl-8 sm:pl-0">
                <span className="font-mono text-xs font-bold bg-main/10 text-main border border-main/20 rounded-base px-2 py-0.5 w-max select-none">
                  {role.startDate} - {role.endDate}
                </span>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/90 mt-1">
                  {role.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { Star } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-6 py-12">
      <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-8 flex flex-col items-center gap-6 relative overflow-hidden select-none w-64 text-center">
        {/* Playful rotating yellow star shape */}
        <div className="w-12 h-12 bg-[#F4D068] text-foreground border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] rounded-base flex items-center justify-center animate-[spin_3s_linear_infinite]">
          <Star className="h-6 w-6 fill-current" />
        </div>
        
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-heading text-lg text-foreground">
            در حال بارگذاری...
          </span>
          <span className="text-xs text-foreground/60 font-base">
            لطفاً چند لحظه صبر کنید
          </span>
        </div>

        {/* Neobrutalist Progress Bar */}
        <div className="w-full bg-background border-2 border-border h-4 rounded-full p-[2px] overflow-hidden relative">
          <div className="h-full bg-main border border-border rounded-full w-2/3 absolute top-0 left-0 animate-progress-bar" />
        </div>
      </div>
    </div>
  )
}

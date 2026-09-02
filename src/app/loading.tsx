import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#F9F9F7] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 px-5 sm:px-6 lg:px-12 animate-in fade-in duration-500 flex items-center">
      <div className="max-w-[1440px] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center">
        
        {/* Left Column Skeleton */}
        <div className="lg:col-span-7 flex flex-col items-start w-full space-y-5 sm:space-y-8">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Skeleton className="w-2 h-2 rounded-full shrink-0" />
            <Skeleton className="h-3 sm:h-4 w-48 sm:w-64" />
          </div>

          {/* Heading */}
          <div className="space-y-4 w-full">
            <Skeleton className="h-10 sm:h-14 lg:h-16 xl:h-20 w-[95%]" />
            <Skeleton className="h-10 sm:h-14 lg:h-16 xl:h-20 w-[85%]" />
          </div>
          
          {/* Paragraph */}
          <div className="space-y-3 w-full max-w-xl">
            <Skeleton className="h-4 sm:h-5 w-full" />
            <Skeleton className="h-4 sm:h-5 w-[90%]" />
            <Skeleton className="h-4 sm:h-5 w-[75%]" />
          </div>
          
          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Skeleton className="h-12 sm:h-14 w-full sm:w-48 rounded-full" />
            <Skeleton className="h-12 sm:h-14 w-full sm:w-36 rounded-full" />
          </div>

          {/* Trust Details */}
          <div className="pt-6 sm:pt-8 w-full border-t border-stone-300/60 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>

        {/* Right Column Skeleton: Frosted Glass Consultation Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
          <div className="w-full max-w-md rounded-3xl bg-stone-100/50 border border-stone-200/50 p-6 sm:p-7 space-y-5">
            {/* Card Header */}
            <div className="space-y-3 pb-3 border-b border-stone-200/60">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-7 sm:h-8 w-56" />
            </div>

            {/* 4 Clean Service Items */}
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200/30">
                  <Skeleton className="w-1.5 h-1.5 rounded-full shrink-0" />
                  <Skeleton className="h-4 w-[70%]" />
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="pt-1 flex justify-end">
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

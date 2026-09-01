import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <div className="flex-1 flex flex-col justify-center w-full min-h-[calc(100vh-80px)] pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[var(--color-navy)] overflow-hidden relative animate-in fade-in duration-500">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start w-full">
        
        {/* Left Side Content Skeleton */}
        <div className="lg:col-span-2 space-y-8 z-10 w-full">
          <div>
            <Skeleton className="h-12 sm:h-16 lg:h-20 w-3/4 mb-6 bg-white/10 dark:bg-white/10" />
            
            <div className="space-y-3">
              <Skeleton className="h-5 w-full bg-white/10 dark:bg-white/10" />
              <Skeleton className="h-5 w-[90%] bg-white/10 dark:bg-white/10" />
              <Skeleton className="h-5 w-[85%] bg-white/10 dark:bg-white/10" />
            </div>

            <div className="space-y-3 mt-6">
              <Skeleton className="h-5 w-[95%] bg-white/10 dark:bg-white/10" />
              <Skeleton className="h-5 w-[85%] bg-white/10 dark:bg-white/10" />
              <Skeleton className="h-5 w-[90%] bg-white/10 dark:bg-white/10" />
            </div>
          </div>
        </div>

        {/* Right Side Form Skeleton */}
        <div className="lg:col-span-3 z-10 relative w-full">
          <div className="bg-white rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl relative min-h-[500px] flex flex-col w-full">
            
            {/* Progress Indicator Skeleton */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <Skeleton className="h-2 w-12 rounded-full" />
                <Skeleton className="h-2 w-4 rounded-full" />
                <Skeleton className="h-2 w-4 rounded-full" />
              </div>
              <Skeleton className="h-4 w-20" />
            </div>

            {/* Form Step Skeleton */}
            <div className="flex-1 space-y-8">
              <Skeleton className="h-8 w-64" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-16 w-full rounded-xl" />
              </div>
            </div>

            {/* Navigation Buttons Skeleton */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
              <div />
              <Skeleton className="h-12 w-32 rounded-md" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

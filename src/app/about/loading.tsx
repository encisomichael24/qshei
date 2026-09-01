import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <div className="w-full min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#F9F9F7] animate-in fade-in duration-500">
      <div className="max-w-[1440px] mx-auto space-y-20 sm:space-y-32 lg:space-y-48">
        
        {/* About QSHEI Introduction Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 w-full">
            <Skeleton className="h-12 w-48" />
            
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[95%]" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[85%]" />
            </div>
            
            <div className="space-y-4 pt-4">
              <Skeleton className="h-4 w-[95%]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
            </div>

            <div className="space-y-4 pt-4">
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[85%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full">
            <Skeleton className="absolute inset-0 rounded-2xl lg:rounded-[2rem]" />
          </div>
        </div>

        {/* Pillars Skeleton (Just the top part visible) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 opacity-50">
          <Skeleton className="h-64 sm:h-80 w-full rounded-2xl lg:rounded-[2rem]" />
          <Skeleton className="h-64 sm:h-80 w-full rounded-2xl lg:rounded-[2rem]" />
        </div>
      </div>
    </div>
  );
}

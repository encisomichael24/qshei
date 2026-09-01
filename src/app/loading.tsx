import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#F9F9F7] pt-32 pb-20 lg:pt-32 lg:pb-24 xl:pb-32 px-6 lg:px-12 animate-in fade-in duration-500">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-8 items-center">
        
        {/* Text Skeleton */}
        <div className="flex flex-col items-start w-full">
          {/* Heading */}
          <div className="space-y-4 w-full max-w-lg">
            <Skeleton className="h-12 sm:h-16 lg:h-20 w-[90%]" />
            <Skeleton className="h-12 sm:h-16 lg:h-20 w-[70%]" />
            <Skeleton className="h-12 sm:h-16 lg:h-20 w-[80%]" />
          </div>
          
          {/* Paragraph */}
          <div className="mt-8 space-y-3 w-full max-w-md">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
          
          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Skeleton className="h-14 w-full sm:w-48 rounded-full" />
            <Skeleton className="h-14 w-full sm:w-40 rounded-full" />
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] xl:h-[600px] mt-8 lg:mt-0">
          <Skeleton className="absolute top-0 right-0 w-[85%] lg:w-[80%] h-[80%] rounded-2xl sm:rounded-[2rem]" />
          <Skeleton className="absolute bottom-0 left-0 w-[60%] lg:w-[55%] h-[45%] rounded-2xl sm:rounded-[2rem] border-4 border-[#F9F9F7]" />
        </div>
      </div>
    </div>
  );
}

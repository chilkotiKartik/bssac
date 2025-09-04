import { Skeleton } from "@/components/ui/skeleton"

export default function TourismLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-3/4 mx-auto mb-8" />

      <div className="w-full mb-6">
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-gray-200">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex justify-between">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-24" />
                </div>
              </div>
            </div>
          ))}
      </div>

      <Skeleton className="h-10 w-1/2 mb-6" />
      <Skeleton className="h-64 w-full mb-8" />
    </div>
  )
}

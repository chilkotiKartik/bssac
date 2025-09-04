import { Skeleton } from "@/components/ui/skeleton"
import { MountainDivider } from "@/components/decorative-elements"

export default function PodcastsLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-uttarakhand-wood to-uttarakhand-mountain">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Episode Skeleton */}
      <section className="py-16 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-uttarakhand-wood/80 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Skeleton className="aspect-square w-full rounded-lg" />
                </div>
                <div className="md:w-2/3">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-1/2 mb-6" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                  <Skeleton className="h-4 w-1/3 mb-8" />
                  <Skeleton className="h-6 w-full mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-8 w-24" />
                    <div className="flex gap-2">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="aspect-video w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Categories Skeleton */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-40 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

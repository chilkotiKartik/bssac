import { Skeleton } from "@/components/ui/skeleton"
import { MountainDivider } from "@/components/decorative-elements"

export default function ShopLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-uttarakhand-wood to-uttarakhand-mountain">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto mb-8" />
            <div className="max-w-xl mx-auto">
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Products Skeleton */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Shop Benefits Skeleton */}
      <section className="py-12 bg-gradient-to-r from-uttarakhand-mountain/10 to-uttarakhand-sunset/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-40 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Products Skeleton */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/4 lg:w-1/5">
              <Skeleton className="h-[600px] w-full rounded-lg" />
            </div>

            <div className="md:w-3/4 lg:w-4/5">
              <Skeleton className="h-16 w-full rounded-lg mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="h-80 w-full rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

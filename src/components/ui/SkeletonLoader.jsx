export default function SkeletonLoader() {
  return (
    <div className="page-container py-12">
      <div className="h-8 w-48 bg-slate-700 rounded-lg animate-pulse mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card-base animate-pulse space-y-3">
            <div className="h-40 bg-slate-700 rounded-lg" />
            <div className="h-4 bg-slate-700 rounded w-3/4" />
            <div className="h-3 bg-slate-700 rounded w-full" />
            <div className="h-3 bg-slate-700 rounded w-5/6" />
            <div className="flex gap-2 pt-1">
              <div className="h-5 w-14 bg-slate-700 rounded-full" />
              <div className="h-5 w-14 bg-slate-700 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

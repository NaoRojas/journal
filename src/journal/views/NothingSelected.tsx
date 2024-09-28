import { Star } from 'lucide-react'

export const NothingSelectedView = ({ month }) => {
  return (
    <div className="flex flex-row min-h-full justify-center items-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <span className="font-semibold leading-none tracking-tight">
            No notes
          </span>
          <span className="text-sm text-muted-foreground">
            No notes found for this month.
          </span>
        </div>
      </div>
    </div>
  )
}

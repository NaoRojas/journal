import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

export const NothingSelectedView = () => {
  return (
    <div className="flex flex-row min-h-full justify-center items-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow p-2">
        <div className="flex flex-col p-6">
          <span className="font-semibold leading-none tracking-tight">
            No notes
          </span>
          <span className="text-sm text-muted-foreground">
            No notes found for this month.
          </span>
          <Button className="mt-4">Create a note for this month</Button>
        </div>
      </div>
    </div>
  )
}

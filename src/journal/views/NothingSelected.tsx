import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const NothingSelectedView = () => {
  const navigate = useNavigate()
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
          <Button className="mt-4" onClick={() => navigate('/new')}>
            Create a note for this month
          </Button>
        </div>
      </div>
    </div>
  )
}

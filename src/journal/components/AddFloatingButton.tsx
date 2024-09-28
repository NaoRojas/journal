import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router'

export const AddFloatingButton = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('clicked')
    navigate('/new')
  }

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        className="p-2
        z-50
        font-semibold
        rounded-full
        shadow-lg
        focus:outline-none
        focus:shadow-outline
        transition
        duration-300
        ease-in-out
        transform
        hover:scale-110
        hover:shadow-xl
      "
        onClick={handleClick}
      >
        <Plus size={24} />
      </Button>
    </div>
  )
}

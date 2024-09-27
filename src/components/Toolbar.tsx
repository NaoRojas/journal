import { logout } from '@/store/auth/authSlice'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Toolbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOut = () => {
    dispatch<any>(logout())
  }

  return (
    <div
      className="z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
    flex items-center px-4 py-2 border-b"
    >
      <div className="ml-auto flex items-center gap-2">
        <Button variant={'outline'} onClick={() => logOut()}>
          Logout
        </Button>
        <Avatar>
          <AvatarImage
            sizes="w-32"
            src="https://ui.shadcn.com/avatars/03.png"
          />
        </Avatar>
      </div>
    </div>
  )
}

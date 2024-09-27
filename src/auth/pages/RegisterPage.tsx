import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AuthLayout } from '../layout/AuthLayout'
import { useNavigate } from 'react-router'
import { useForm } from '@/hooks/use-form'
import { useDispatch } from 'react-redux'
import { registerUser } from '@/store/auth/thunks'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formData = {
    name: '',
    email: '',
    password: '',
  }

  const { name, email, password, onInputChange } = useForm(formData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      name,
      email,
      password,
    })

    dispatch<any>(
      registerUser({
        name,
        email,
        password,
      })
    )
  }

  return (
    <AuthLayout title="Create an Account" subtitle="Register with your email">
      <form action="" onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Username
            </label>
            <Input
              type="test"
              name="name"
              value={name}
              onChange={onInputChange}
              placeholder="user"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="name@email.com"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </label>
            <Input
              name="password"
              value={password}
              onChange={onInputChange}
              type="password"
            />
          </div>
          <div className="grid gap-2">
            <Button type="submit">Create Account</Button>
          </div>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>
      <Button
        variant={'secondary'}
        onClick={() => {
          navigate('/auth/login')
        }}
      >
        Login
      </Button>
    </AuthLayout>
  )
}

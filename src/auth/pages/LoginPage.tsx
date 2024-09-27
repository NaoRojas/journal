import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AuthLayout } from '../layout/AuthLayout'
import { useNavigate } from 'react-router'
import { useForm } from '@/hooks/use-form'
import { loginUser } from '@/store/auth/thunks'
import { useEffect } from 'react'

export const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { errorMessage } = useSelector((state) => state.auth)

  const { email, password, onInputChange } = useForm({
    email: 'nao@email.com',
    password: '123456',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch<any>(loginUser({ email, password }))
  }

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     navigate('/')
  //   }
  //   if (status === 'not-authenticated') {
  //     navigate('/auth/login')
  //   }
  // }, [status])

  return (
    <AuthLayout title="Login" subtitle="Login with your account">
      <form action="" onSubmit={handleSubmit}>
        <div className="grid gap-6">
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
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="grid gap-2">
            <Button type="submit">Login</Button>
            {errorMessage && (
              <div className="text-red-500 text-xs">{errorMessage}</div>
            )}
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
          navigate('/auth/register')
        }}
      >
        Create an Account
      </Button>
    </AuthLayout>
  )
}

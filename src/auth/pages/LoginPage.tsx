import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title="Login" subtitle="Login with your account">
      <form action="">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <Input type="email" placeholder="name@email.com" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </label>
            <Input type="password" />
          </div>
          <div className="grid gap-2">
            <Button>Login</Button>
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
      <Button variant={'secondary'}>Create an Account</Button>
    </AuthLayout>
  )
}

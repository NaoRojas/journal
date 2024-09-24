import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const LoginPage = () => {
  return (
    <div className="container relative hidden min-h-svh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900"></div>
        <div className="relative z-20 flex items-center text-2xl font-bold">
          Journal App
        </div>
        <div className="relative z-20 mt-auto">
          <div className="space-y-2">
            <p className="text-lg">
              "Embrace the process, and let your words flow freely. Your journal
              is a safe space where you can reflect, dream, and grow."
            </p>
          </div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="text-2xl font-semibold tracking-tight">Log In</div>
            <p className="text-sm text-muted-foreground">
              Log in to your account to continue
            </p>
          </div>
          <div className="grid gap-6">
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
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <Button variant={'secondary'}>Create an Account</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

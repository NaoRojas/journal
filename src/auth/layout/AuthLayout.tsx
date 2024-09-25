import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const AuthLayout = ({ children, title = '', subtitle = '' }) => {
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
            <div className="text-2xl font-semibold tracking-tight">{title}</div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <div className="grid gap-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

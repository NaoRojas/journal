import { Navbar } from '@/components/Navbar'
import { Toolbar } from '@/components/Toolbar'
import { AddFloatingButton } from '../components/AddFloatingButton'
import { Outlet } from 'react-router-dom'
import { ToastProvider, Toast } from '@/components/ui/toast'

export const JournalLayout = () => {
  return (
    <body>
      <main vaul-drawer-wrapper="" className="min-h-screen  bg-white">
        <div className="lg:flex">
          <div className="flex flex-col">
            <Navbar />
          </div>
          <div className="flex flex-col">
            <Toolbar />
            <div className="flex flex-1">
              <div
                className="scrollable-area relative flex w-full flex-col"
                style={{ maxHeight: '90vh', minHeight: '0px' }}
              >
                <div className="content-wrapper h-full">
                  <div className="content h-full">
                    <Outlet />
                  </div>
                  <AddFloatingButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastProvider>
          <Toast />
        </ToastProvider>
      </main>
    </body>
  )
}

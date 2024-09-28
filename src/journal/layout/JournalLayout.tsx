import { Navbar } from '@/components/Navbar'
import { SideMenu } from '@/components/SideMenu'
import { Toolbar } from '@/components/Toolbar'
import { MenuContent } from '@/componets/MenuContent'
import { AddFloatingButton } from '../components/AddFloatingButton'

export const JournalLayout = ({ children }) => {
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
              <div className="scrollable-area relative flex w-full flex-col">
                <div className="content-wrapper h-full">
                  <div className="content h-full">{children}</div>
                  <AddFloatingButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

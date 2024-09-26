import { Navbar } from '@/components/Navbar'
import { SideMenu } from '@/components/SideMenu'
import { MenuContent } from '@/componets/MenuContent'

export const JournalLayout = ({ children }) => {
  return (
    <body>
      <main vaul-drawer-wrapper="" className="min-h-screen  bg-white">
        <div className="lg:flex">
          <Navbar />

          <div className="flex flex-1">
            <div className="scrollable-area relative flex w-full flex-col">
              <div className="content-wrapper h-full">
                <div className="content h-full">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

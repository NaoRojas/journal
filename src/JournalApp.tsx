import { Navbar } from './components/Navbar'
import { Toolbar } from './components/Toolbar'
export const JournalApp = () => {
  return (
    <body>
      <main vaul-drawer-wrapper="" className="min-h-screen bg-white">
        <div className="lg:flex">
          <Toolbar />
          <Navbar />
          <div className="flex flex-1">
            <div className="scrollable-area relative flex w-full flex-col">
              <div className="content-wrapper">
                <div className="content">
                  <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                    Hi, let's have a meeting tomorrow to discuss the project.
                    I've been reviewing the project details and have some ideas
                    I'd like to share. It's crucial that we align on our next
                    steps to ensure the project's success. Please come prepared
                    with any questions or insights you may have. Looking forward
                    to our meeting! Best regards, William
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

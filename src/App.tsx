import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Navbar } from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <main vaul-drawer-wrapper="" className="min-h-screen bg-white">
          <div className="lg:flex">
            <Navbar />
            <div className="flex flex-1">
              <div className="scrollable-area relative flex w-full flex-col">
                <div className="content-wrapper">
                  <div className="content">
                    <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                      Hi, let's have a meeting tomorrow to discuss the project.
                      I've been reviewing the project details and have some
                      ideas I'd like to share. It's crucial that we align on our
                      next steps to ensure the project's success. Please come
                      prepared with any questions or insights you may have.
                      Looking forward to our meeting! Best regards, William
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  )
}

export default App

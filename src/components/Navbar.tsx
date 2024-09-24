import { Inbox, Sparkle, Sparkles } from 'lucide-react'
export const Navbar = () => {
  return (
    <div className="scrollable-area relative w-full flex-col bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-60 xl:w-72">
      <div className="bg-stone-100 p-3 ">
        <div className="p-2 flex flex-row justify-center mt-3">
          <span className="font-semibold tracking-tight text-3xl text-center">
            Journal
          </span>
        </div>
        <div className="flex w-full h-full flex-col text-sm mt-10">
          <div className="flex flex-col gap-1">
            <a className="group flex items-center justify-between rounded-lg p-2 bg-stone-300 text-black hover:text-stone-700">
              <span className="flex items-center gap-2">
                <Sparkles size={16} />
                <span className="font-medium text-vlack">January</span>
              </span>
              <span className="hidden h-5 w-5 place-content-center rounded border text-xs font-medium transition-colors duration-200 lg:grid border-stone-500 bg-stone-500 text-white group-hover:border-gray-600">
                1
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Inbox, Sparkle, Sparkles } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setMenuItemsNavBar } from '@/store/menu/thunks'
import { getEntriesByMonth } from '@/store/journal/thunks'
import { setMonth } from '@/store/journal/journalSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const { filteredEntries } = useSelector((state) => state.journal)
  const { menuItems } = useSelector((state) => state.menu)
  const { month } = useSelector((state) => state.journal)

  const handleMenuClick = (month) => {
    dispatch(getEntriesByMonth(month))
    dispatch(setMonth(month))
  }

  console.log('entries', filteredEntries.length)

  return (
    <div className="scrollable-area relative w-full flex-col bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-60  h-screen">
      <div className="bg-stone-100 p-3 max-h-full">
        <div className="p-2 flex flex-row justify-center mt-3">
          <span className="font-semibold tracking-tight text-3xl text-center text-black">
            Journal
          </span>
        </div>
        <div className="flex w-full h-full flex-col text-sm mt-10">
          <div className="flex flex-col gap-1">
            {menuItems.map((menuItem) => {
              return (
                <a
                  className={`group flex items-center justify-between rounded-lg p-2 hover:bg-gray-200 ${
                    month === menuItem.month ? 'bg-gray-300' : ''
                  }`}
                  onClick={() => handleMenuClick(menuItem.month)}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-medium text-black">
                      {menuItem.month}
                    </span>
                  </span>
                  <span className="hidden h-5 w-5 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 lg:grid">
                    {menuItem.amount}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

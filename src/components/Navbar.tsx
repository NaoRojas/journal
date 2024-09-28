import { setMonth } from '@/store/journal/journalSlice'
import { Inbox, Sparkle, Sparkles } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { getEntriesByMonth } from '@/store/journal/thunks'
import { getFilteredNotes } from '@/journal/helpers/getFilteredNotes'
import { useSelector } from 'react-redux'

let menuItems = [
  {
    month: 'January',
    amount: 1,
  },
  {
    month: 'February',
    amount: 2,
  },
  {
    month: 'March',
    amount: 3,
  },
  {
    month: 'April',
    amount: 4,
  },
  {
    month: 'May',
    amount: 5,
  },
  {
    month: 'June',
    amount: 6,
  },
  {
    month: 'July',
    amount: 7,
  },
  {
    month: 'August',
    amount: 8,
  },
  {
    month: 'September',
    amount: 9,
  },
  {
    month: 'October',
    amount: 10,
  },
  {
    month: 'November',
    amount: 11,
  },
  {
    month: 'December',
    amount: 12,
  },
]

export const Navbar = () => {
  const dispatch = useDispatch()
  const { entries } = useSelector((state) => state.journal)

  const handleMenuClick = (month) => {
    dispatch(getEntriesByMonth(month))
  }

  const setMenuItems = () => {
    menuItems = menuItems.map((entry) => {
      return {
        ...entry,
        amount: getFilteredNotes(entries, entry.month),
      }
    })
  }
  setMenuItems()

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
            {menuItems.map((entry) => {
              return (
                <a
                  className="group flex items-center justify-between rounded-lg p-2 hover:bg-gray-200"
                  onClick={() => handleMenuClick(entry.month)}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles size={16} className="text-black" />
                    <span className="font-medium text-black">
                      {entry.month}
                    </span>
                  </span>
                  <span className="hidden h-5 w-5 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 lg:grid">
                    {entry.amount}
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

import { getFilteredNotes } from "@/journal/helpers/getFilteredNotes"
import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuItems: [
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
    ],
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = state.menuItems.map((entry) => {
        return {
          ...entry,
          amount: getFilteredNotes(action.payload.entries, entry.month),
        }
      })
    },
  },
})

export const { setMenuItems } = menuSlice.actions
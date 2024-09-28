import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { journalSlice } from './journal/journalSlice'
import { menuSlice } from './menu/menuSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
    menu: menuSlice.reducer
  }
})

export default store
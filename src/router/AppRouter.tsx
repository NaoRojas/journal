import { LoginPage } from '@/auth/pages/LoginPage'
import { AuthRoutes } from '@/auth/routes/AuthRoutes'
import { JounalRoutes } from '@/journal/routes/JournalRoutes'
import { Routes, Route } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JounalRoutes />} />
    </Routes>
  )
}

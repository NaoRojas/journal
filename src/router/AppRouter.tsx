import { AuthRoutes } from '@/auth/routes/AuthRoutes'
import { JounalRoutes } from '@/journal/routes/JournalRoutes'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useCheckAuth } from '@/hooks/use-check-auth'

export const AppRouter = () => {
  const { status } = useCheckAuth()
  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<JounalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

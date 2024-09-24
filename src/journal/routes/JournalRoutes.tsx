import { Routes, Navigate, Route } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'

export const JounalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

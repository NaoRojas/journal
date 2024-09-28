import { Routes, Navigate, Route } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'
import { NoteView } from '../views/NoteView'

export const JounalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/new" element={<NoteView />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

import { Routes, Navigate, Route } from 'react-router-dom'
import { NoteView } from '../views/NoteView'
import { JournalLayout } from '../layout/JournalLayout'
import { JournalPage } from '../pages/JournalPage'

export const JounalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalLayout />}>
        <Route path="journal" element={<JournalPage />} />
        <Route path="new" element={<NoteView />} />
      </Route>

      <Route path="/*" element={<Navigate to="/journal" />} />
    </Routes>
  )
}

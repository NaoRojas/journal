import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '@/journal/views/NothingSelected'
import { NoteView } from '../views/NoteView'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export const JournalPage = () => {
  const { activeEntry } = useSelector((state: RootState) => state.journal)
  return (
    <>
      {activeEntry ? <NoteView note={activeEntry} /> : <NothingSelectedView />}
    </>
  )
}

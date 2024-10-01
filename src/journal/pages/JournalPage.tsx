import { NothingSelectedView } from '@/journal/views/NothingSelected'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { NoteCard } from '../components/NoteCard'
import { Loading } from '@/components/Loading'

export const JournalPage = () => {
  const { activeEntry, month, isLoading } = useSelector(
    (state: RootState) => state.journal
  )
  const { filteredEntries } = useSelector((state: RootState) => state.journal)
  console.log('entries', filteredEntries)

  return (
    <>
      {/* {activeEntry ? <NoteView note={activeEntry} /> : <NothingSelectedView />} */}
      <h2>{month}</h2>
      {isLoading && <Loading />}
      {filteredEntries.length > 0 ? (
        <div className="justify-center gap-6 rounded-lg py-8 md:grid lg:grid-cols-2 xl:grid-cols-2">
          {filteredEntries.map((entry) => (
            <NoteCard key={entry.id} note={entry} />
          ))}
        </div>
      ) : (
        <NothingSelectedView month={month} />
      )}
    </>
  )
}

import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '@/journal/views/NothingSelected'
import { NoteView } from '../views/NoteView'
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
        Hi, let's have a meeting tomorrow to discuss the project. I've been
        reviewing the project details and have some ideas I'd like to share.
        It's crucial that we align on our next steps to ensure the project's
        success. Please come prepared with any questions or insights you may
        have. Looking forward to our meeting! Best regards, William
      </div> */}
      {/* <NothingSelectedView></NothingSelectedView> */}
      <NoteView />
    </JournalLayout>
  )
}

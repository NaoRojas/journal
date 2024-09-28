import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Timestamp } from 'firebase/firestore'

export const NoteCard = ({ note }) => {
  const formatDate = (timestamp) => {
    // Check if the timestamp is already a Firestore Timestamp object
    if (!(timestamp instanceof Timestamp)) {
      // Convert to Firestore Timestamp if it's not
      timestamp = new Timestamp(timestamp.seconds, timestamp.nanoseconds)
    }
    const date = timestamp.toDate()
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }
  return (
    <Card>
      <CardContent>
        <div className="flex-col py-6">
          <h3 className="font-semibold leading-none tracking-tight mb-2">
            {note.title}
          </h3>
          <p className="text-sm text-gray-500">{note.body}</p>
        </div>
      </CardContent>
      <CardFooter>
        <p>{formatDate(note.date)}</p>
      </CardFooter>
    </Card>
  )
}

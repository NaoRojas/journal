import { Timestamp } from 'firebase/firestore'

export const formatDate = (timestamp) => {
  // Check if the timestamp is already a Firestore Timestamp object
  if (!(timestamp instanceof Timestamp)) {
    // Convert to Firestore Timestamp if it's not
    timestamp = new Timestamp(timestamp.seconds, timestamp.nanoseconds)
  }
  const date = timestamp.toDate()
  console.log('date', date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }))
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
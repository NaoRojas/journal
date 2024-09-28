import { collection, getDocs } from 'firebase/firestore';
import { firebaseDB } from "@/firebase/config"

export const loadNotes = async ({ uid }) => {
  if (!uid) throw new Error('uid is required')
  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`)
  const notes = []
  const docs = await getDocs(collectionRef)
  docs.forEach(doc => {
    notes.push({ id: doc.id, ...doc.data() })
  })
  console.log('notes', notes)
  return notes
}
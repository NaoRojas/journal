import { firebaseDB } from "@/firebase/config"
import { Note } from "@/models/noteType"
import { doc, collection, setDoc } from "firebase/firestore"
import { addEntry, setActiveEntry, setLoading } from "./journalSlice"


export const addNewEntry = (note: Note) => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth
      dispatch(setLoading(true))
      const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
      await setDoc(newDoc, note)
      console.log('newDoc', newDoc)
      dispatch(addEntry(note))
      dispatch(setActiveEntry(note))
    }
    catch (error) {
      console.log('error', error)
    }
  }
}

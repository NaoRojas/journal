import { firebaseDB } from "@/firebase/config"
import { Note } from "@/models/noteType"
import { doc, collection, setDoc } from "firebase/firestore"
import { addEntry, setActiveEntry, setLoading, setEntries, filterEntriesByMonth } from "./journalSlice"
import { loadNotes } from "@/journal/helpers/loadNotes"
import { setMonth } from "./journalSlice"

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

export const getEntries = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth
      console.log('uid', uid)
      const notes = await loadNotes({ uid })
      dispatch(setEntries(notes))
    }
    catch (error) {
      console.log('error', error)
    }
  }
}


export const getEntriesByMonth = (month: string) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getEntries())
      dispatch(setMonth(month))
      dispatch(filterEntriesByMonth(month))
    }
    catch (error) {
      console.log('error', error)
    }
  }
}
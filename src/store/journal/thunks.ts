import { firebaseDB } from "@/firebase/config"
import { Note } from "@/models/noteType"
import { doc, collection, setDoc } from "firebase/firestore"
import { addEntry, setActiveEntry, setLoading, setEntries, filterEntriesByMonth } from "./journalSlice"
import { loadNotes } from "@/journal/helpers/loadNotes"
import { setMonth } from "./journalSlice"
import { setMenuItemsNavBar } from "../menu/thunks"

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
      dispatch(getEntries())
    }
    catch (error) {
      console.log('error', error)
    }
  }
}

export const getEntries = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))

      const { uid } = getState().auth
      const notes = await loadNotes({ uid })
      dispatch(setEntries(notes))
      dispatch(setMenuItemsNavBar(getState().journal.month))

    }
    catch (error) {
      console.log('error', error)
    }
  }
}


export const getEntriesByMonth = (month: string) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))

      dispatch(setMonth(month))
      dispatch(filterEntriesByMonth(month))

    }
    catch (error) {
      console.log('error', error)
    }
  }
}

export const getEntryById = (id: string) => {
  return async (dispatch, getState) => {
    try {
      const { entries } = getState().journal
      dispatch(setLoading(true))
      console.log('getEntryById notes', entries)
      const note = entries.find((note) => note.id === id)
      dispatch(setActiveEntry(note))
      console.log('getEntryById', note)

    }
    catch (error) {
      console.log('error', error)
    }
  }
}
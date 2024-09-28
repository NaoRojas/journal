import { Note } from "@/models/noteType"


export const addNewEntry = (note: Note) => {
  return async (dispatch, getState) => {
    console.log('Adding new entry', note)
    console.log('Adding new entry', getState)

  }
}
import { createSlice } from '@reduxjs/toolkit'
import { Note } from '@/models/noteType'

interface State {
  isLoading: boolean;
  isSuccessful: boolean;
  entries: Note[];
  activeEntry?: Note | null
}

const initialState: State = {
  isLoading: false,
  isSuccessful: false,
  entries: [],
  activeEntry: null,
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    getEntriesByMonth: (state, action) => {
      state.isLoading = true;
      state.isSuccessful = true
    },
    getEntryById: (state, action) => {
      state.isLoading = true;
      state.isSuccessful = true
    },
    addEntry: (state, action) => {
      state.entries.push(action.payload)
      state.isLoading = false;
      state.isSuccessful = true
    },
    updateEntry: (state, action) => {
      const { note } = action.payload;
      const entryIndex = state.entries.findIndex((entry) => entry.id === note.id);
      if (entryIndex !== -1) {
        state.entries[entryIndex] = { ...state.entries[entryIndex], ...note };
      }
      state.isLoading = false;
      state.isSuccessful = true
    },
    deleteEntry: (state, action) => {
      const id = action.payload
      state.entries = state.entries.filter((entry) => entry.id !== id)
      state.isLoading = false;
      state.isSuccessful = true
    },
  },
})

export const { addEntry, updateEntry, deleteEntry } = journalSlice.actions
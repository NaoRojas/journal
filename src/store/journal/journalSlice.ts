import { createSlice } from '@reduxjs/toolkit'
import { Note } from '@/models/noteType'
import { formatDate } from '@/journal/helpers/convertDate';
import { Timestamp } from 'firebase/firestore'

interface State {
  isLoading: boolean;
  isSuccessful: boolean;
  entries: Note[];
  activeEntry?: Note | null,
  month?: string
  filteredEntries?: Note[]
}

const initialState: State = {
  isLoading: false,
  isSuccessful: false,
  entries: [],
  activeEntry: null,
  month: 'September',
  filteredEntries: []
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    filterEntriesByMonth: (state, action) => {
      state.isLoading = false;
      state.month = action.payload;
      state.filteredEntries = state.entries.filter((entry) =>
        entry.date?.includes(action.payload)
      )
      console.log('entries2', state.entries);
    },
    setEntries: (state, action) => {
      state.entries = action.payload.map(entry => ({
        ...entry,
        date: entry.date instanceof Timestamp ? formatDate(entry.date) : entry.date
      }));
      state.isLoading = false;
      console.log('entries1', state.entries);

    },
    setMonth: (state, action) => {
      state.month = action.payload
    },
    setActiveEntry: (state, action) => {
      state.activeEntry = action.payload
      state.isLoading = false;
    },
    addEntry: (state, action) => {
      state.entries.push(action.payload)
      state.isLoading = false;
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
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
})

export const { addEntry,
  setActiveEntry,
  setLoading,
  setEntries,
  filterEntriesByMonth,
  updateEntry,
  deleteEntry,
  setMonth,
} = journalSlice.actions
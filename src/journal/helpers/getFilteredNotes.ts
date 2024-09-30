import { formatDate } from './convertDate'
export const getFilteredNotes = (notes, month) => {
  return notes.filter((entry) => entry.date?.includes(month))?.length
}
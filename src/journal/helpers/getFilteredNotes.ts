import { formatDate } from './convertDate'
export const getFilteredNotes = (notes, month) => {
  return notes.filter((entry) => formatDate(entry.date).includes(month))?.length
}
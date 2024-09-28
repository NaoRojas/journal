import { formatDate } from './convertDate'
export const getFilteredNotes = (notes, month) => {
  console.log('notes', notes)
  return notes?.filter((entry) => formatDate(entry.date).includes(month))?.length
}
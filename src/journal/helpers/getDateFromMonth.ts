import { getDate } from "date-fns";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const getDateFromMonth = (month: string) => {
  const year = new Date().getFullYear();
  const monthIndex = monthNames.indexOf(month);
  return new Date(year, monthIndex, 1)
}
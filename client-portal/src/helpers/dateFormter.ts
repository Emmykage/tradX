/**
 * Formats a given date into a string in the format "YYYY-MM-DD".
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} - The formatted date string.
 */

export function dateFormter(date: Date) {
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

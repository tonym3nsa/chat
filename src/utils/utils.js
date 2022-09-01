import { MONTHS } from "../constants/constants";

/**
 * Returns human-readable time from UNIX time
 * @param {number} timeStamp
 * @returns {string}
 */

export const getFormattedTime = (timeStamp) => {
  const date = new Date(timeStamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${day} ${MONTHS[month]} ${year} ${hour}:${minutes}`;
};

export const paginate = (array, page_size, page_number) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array
    ?.reverse()
    ?.slice((page_number - 1) * page_size, page_number * page_size);
};

import { MONTHS } from "../constants/constants";

/**
 * Returns human-readable time from UNIX time
 * @param {number} timeStamp
 * @returns {string}
 */

export const getFormattedTime = (timeStamp) => {
  console.log("tie", timeStamp);
  const date = new Date(timeStamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${day} ${MONTHS[month]} ${year} ${hour}:${minutes}`;
};

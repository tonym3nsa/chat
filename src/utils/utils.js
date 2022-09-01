import { MONTHS } from "../constants/constants";

/**
 * Returns human-readable time from UNIX time
 * @param {number} timestamp
 * @returns {string}
 */

export const getFormattedTime = (timestamp) => {
  console.log("tie", timestamp);
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${day} ${MONTHS[month]} ${year} ${hour}:${minutes}`;
};

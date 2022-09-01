import { POST_MESSAGE, GET_MESSAGE } from "../../constants/constants";

/**
 * Dispatched action to get chat
 * @returns {{type: string}}
 */
export const getMessage = () => {
  return {
    type: GET_MESSAGE,
  };
};

/**
 * Dispatched action to update chat history
 * @param {Object} message posted message object
 * @returns {{type: string, message}}
 */
export const postMessage = (message) => {
  return {
    type: POST_MESSAGE,
    message,
  };
};

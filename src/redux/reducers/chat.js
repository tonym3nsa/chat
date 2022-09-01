import {
  POST_MESSAGE,
  LOCAL_CHATS,
  GET_MESSAGE,
} from "../../constants/constants";

const initialState = {
  chat: [],
};

/**
 * Sort array by descending time stamp order
 * @param {Object []} history
 * @returns {*}
 */
const sortHistory = (history) => {
  return history.sort(
    (a, b) =>
      Math.floor(new Date(b.timeStamp).getTime()) -
      Math.floor(new Date(a.timeStamp).getTime())
  );
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      const history = localStorage.getItem(LOCAL_CHATS)
        ? JSON.parse(localStorage.getItem(LOCAL_CHATS))
        : [];
      return {
        ...state,
        history: sortHistory(history),
      };
    case POST_MESSAGE:
      const { message } = action;
      const updatedHistory = localStorage.getItem(LOCAL_CHATS)
        ? JSON.parse(localStorage.getItem(LOCAL_CHATS))
        : [];
      updatedHistory.push(message);
      localStorage.setItem(LOCAL_CHATS, JSON.stringify(updatedHistory));
      return { ...state, history: sortHistory(updatedHistory) };
    default:
      return state;
  }
};

export default chatReducer;

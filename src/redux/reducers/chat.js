import {
  POST_MESSAGE,
  LOCAL_CHATS,
  GET_MESSAGE,
} from "../../constants/constants";

const initialState = {
  chat: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      const history = localStorage.getItem(LOCAL_CHATS)
        ? JSON.parse(localStorage.getItem(LOCAL_CHATS))
        : [];
      return { ...state, history };
    case POST_MESSAGE:
      const { message } = action;
      const updatedHistory = localStorage.getItem(LOCAL_CHATS)
        ? JSON.parse(localStorage.getItem(LOCAL_CHATS))
        : [];
      updatedHistory.push(message);
      localStorage.setItem(LOCAL_CHATS, JSON.stringify(updatedHistory));
      return { ...state, history: updatedHistory };
    default:
      return state;
  }
};

export default chatReducer;

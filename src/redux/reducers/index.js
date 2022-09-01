import { combineReducers } from "redux";
import chatReducer from "./chat";

const rootReducer = combineReducers({ chatReducer });

export default rootReducer;

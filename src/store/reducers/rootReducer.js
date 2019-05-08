import studentReducer from "./studentReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  project: studentReducer
});

export default rootReducer;

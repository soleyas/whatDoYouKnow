import { combineReducers } from "redux";
import players from "./playersReducer";
import questions from "./questionReducer";
import categories from "./categoryReducer";

export default combineReducers({
  players,
  questions,
  categories
});

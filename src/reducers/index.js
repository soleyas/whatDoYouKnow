import { combineReducers } from 'redux';
import players from './playersReducer';
import questions from './questionReducer';

export default combineReducers({
  players,
  questions
});

import {
  GET_QUESTIONS,
  REMOVE_QUESTION,
  GETTING_QUESTIONS
} from '../constants/questionConstants';

const INITIAL_STATE = {
  gettingQuestions: false,
  questions: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETTING_QUESTIONS:
      return { ...state, gotQuestions: false };
    case GET_QUESTIONS:
      return { ...state, questions: action.payload, gotQuestions: true };
    case REMOVE_QUESTION:
      state.questions.splice(action.payload, 1);
      return { ...state };
    default:
      return state;
  }
};

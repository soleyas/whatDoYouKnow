import {
  GET_QUESTIONS,
  GETTING_QUESTIONS,
  CHANGE_QUESTION,
  GET_QUESTIONS_ERROR
} from '../constants/questionConstants';

const INITIAL_STATE = {
  gotQuestions: false,
  gotQuestionsError: false,
  questions: [],
  question: {}
};

export default (state = INITIAL_STATE, action) => {
  let randomIndex = 0;
  let element = {};
  switch (action.type) {
    case GETTING_QUESTIONS:
      return { ...state, gotQuestions: false, gotQuestionsError: false };
    case GET_QUESTIONS:
      element = action.payload.shift();
      return {
        ...state,
        question: element,
        questions: action.payload,
        gotQuestions: true,
        gotQuestionsError: false
      };
    case CHANGE_QUESTION:
      randomIndex = Math.floor(Math.random() * state.questions.length);
      return {
        ...state,
        question: state.questions[randomIndex],
        questions: state.questions.filter((_, index) => randomIndex !== index)
      };
    case GET_QUESTIONS_ERROR:
      return {
        ...state,
        gotQuestions: false,
        gotQuestionsError: true
      };
    default:
      return state;
  }
};

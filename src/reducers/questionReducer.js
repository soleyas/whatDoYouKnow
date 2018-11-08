import {
  GET_QUESTIONS,
  REMOVE_QUESTION,
  GETTING_QUESTIONS,
  CHANGE_QUESTION,
  GET_CATEGORIES,
  GETTING_CATEGORIES,
  SET_CATEGORY
} from "../constants/questionConstants";

const INITIAL_STATE = {
  gotQuestions: false,
  questions: [],
  question: {},
  categories: [],
  gotCategories: false,
  category: {}
};

export default (state = INITIAL_STATE, action) => {
  let randomIndex = 0;
  let element = {};
  switch (action.type) {
    case GETTING_QUESTIONS:
      return { ...state, gotQuestions: false };
    case GET_QUESTIONS:
      element = action.payload.shift();
      return {
        ...state,
        question: element,
        questions: action.payload,
        gotQuestions: true
      };
    case CHANGE_QUESTION:
      randomIndex = Math.floor(Math.random() * state.questions.length);
      console.log(state.questions.length, randomIndex);
      return {
        ...state,
        question: state.questions[randomIndex],
        questions: state.questions.filter(
          (value, index) => randomIndex !== index
        )
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        gotCategories: true,
        category: action.payload[0]
      };
    case GETTING_CATEGORIES:
      return { ...state, gotCategories: false };
    case SET_CATEGORY:
      console.log("kalli");
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

import axios from 'axios';
import {
  GET_QUESTIONS,
  GETTING_QUESTIONS,
  CHANGE_QUESTION,
  GET_QUESTIONS_ERROR
} from '../constants/questionConstants';

const baseUrl = 'https://opentdb.com/api.php';

export const getQuestions = (amount, cat) => {
  return dispatch => {
    dispatch(gettingQuestions());
    axios
      .get(baseUrl, {
        params: {
          amount: amount,
          type: 'multiple',
          category: cat,
          encode: 'url3986'
        }
      })
      .then(res => dispatch(getQuestionsSuccess(res.data.results)))
      .catch(err => dispatch(getQuestionsError(err)));
  };
};

export const changeQuestion = () => {
  return {
    type: CHANGE_QUESTION
  };
};

const getQuestionsSuccess = data => {
  return {
    type: GET_QUESTIONS,
    payload: data
  };
};

const getQuestionsError = err => {
  return {
    type: GET_QUESTIONS_ERROR,
    payload: err
  };
};

const gettingQuestions = () => {
  return {
    type: GETTING_QUESTIONS
  };
};

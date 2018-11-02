import axios from 'axios';
import {
  GET_QUESTIONS,
  REMOVE_QUESTION,
  GETTING_QUESTIONS
} from '../constants/questionConstants';

const baseUrl = 'https://opentdb.com/api.php';

export const getQuestions = amount => {
  return dispatch => {
    dispatch(gettingQuestions());
    axios
      .get(baseUrl, { params: { amount: amount } })
      .then(res => dispatch(getQuestionsSuccess(res.data.results)));
  };
};

export const removeQuestion = index => {
  return {
    type: REMOVE_QUESTION,
    payload: index
  };
};

const getQuestionsSuccess = data => {
  return {
    type: GET_QUESTIONS,
    payload: data
  };
};

const gettingQuestions = () => {
  return {
    type: GETTING_QUESTIONS
  };
};

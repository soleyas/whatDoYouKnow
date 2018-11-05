import axios from 'axios';
import {
  GET_QUESTIONS,
  REMOVE_QUESTION,
  GETTING_QUESTIONS,
  CHANGE_QUESTION
} from '../constants/questionConstants';

const baseUrl = 'https://opentdb.com/api.php';

export const getQuestions = amount => {
  return dispatch => {
    dispatch(gettingQuestions());
    axios
      .get(baseUrl, {
        params: { amount: amount, type: 'multiple', encode: 'url3986' }
      })
      .then(res => dispatch(getQuestionsSuccess(res.data.results)));
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

const gettingQuestions = () => {
  return {
    type: GETTING_QUESTIONS
  };
};

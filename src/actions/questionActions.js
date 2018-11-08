import axios from 'axios';
import {
  GET_QUESTIONS,
  REMOVE_QUESTION,
  GETTING_QUESTIONS,
  CHANGE_QUESTION,
  GET_CATEGORIES,
  GETTING_CATEGORIES,
  SET_CATEGORY
} from '../constants/questionConstants';

const baseUrl = 'https://opentdb.com/api.php';
const categoryUrl = 'https://opentdb.com/api_category.php';
const categories = new Set([
  'General Knowledge',
  'Sports',
  'Science: Computers',
  'Entertainment: Television',
  'Entertainment: Video Games',
  'Science: Mathematics',
  'Geography'
]);

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
      .then(res => dispatch(getQuestionsSuccess(res.data.results)));
  };
};

export const getCategories = amount => {
  return dispatch => {
    dispatch(gettingCatigories());
    axios
      .get(categoryUrl)
      .then(res => dispatch(getCatigoriesSuccess(res.data)));
  };
};

export const changeQuestion = () => {
  return {
    type: CHANGE_QUESTION
  };
};

export const setCategory = category => {
  return {
    type: SET_CATEGORY,
    payload: category
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

const gettingCatigories = () => {
  return {
    type: GETTING_CATEGORIES
  };
};

const getCatigoriesSuccess = ({ trivia_categories }) => {
  const cats = trivia_categories.filter(value => categories.has(value.name));
  return {
    type: GET_CATEGORIES,
    payload: cats
  };
};

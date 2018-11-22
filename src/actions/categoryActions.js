import axios from 'axios';
import {
  GET_CATEGORIES,
  GETTING_CATEGORIES,
  SET_CATEGORY,
  GET_CATEGORIES_ERROR
} from '../constants/categoryConstants';

const categoryUrl = 'https://opentdb.com/api_category.php';
const categories = new Set([
  'General Knowledge',
  'Sports',
  'Science: Computers',
  'Entertainment: Television',
  'Entertainment: Video Games',
  'Geography'
]);

export const getCategories = () => {
  return dispatch => {
    dispatch(gettingCatigories());
    axios
      .get(categoryUrl)
      .then(res => dispatch(getCatigoriesSuccess(res.data)))
      .catch(err => dispatch(getCategoriesError(err)));
  };
};

export const setCategory = category => {
  return {
    type: SET_CATEGORY,
    payload: category
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

const getCategoriesError = err => {
  return {
    type: GET_CATEGORIES_ERROR,
    payload: err
  };
};

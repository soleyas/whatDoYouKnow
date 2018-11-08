import axios from "axios";
import {
  GET_CATEGORIES,
  GETTING_CATEGORIES,
  SET_CATEGORY
} from "../constants/categoryConstants";

const categoryUrl = "https://opentdb.com/api_category.php";
const categories = new Set([
  "General Knowledge",
  "Sports",
  "Science: Computers",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Geography"
]);

export const getCategories = amount => {
  return dispatch => {
    dispatch(gettingCatigories());
    axios
      .get(categoryUrl)
      .then(res => dispatch(getCatigoriesSuccess(res.data)));
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

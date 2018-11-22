import {
  GET_CATEGORIES,
  GETTING_CATEGORIES,
  SET_CATEGORY,
  GET_CATEGORIES_ERROR
} from '../constants/categoryConstants';

const INITIAL_STATE = {
  categories: [],
  gotCategories: false,
  gotCategoriesError: false,
  category: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        gotCategories: true,
        gotCategoriesError: false,
        category: action.payload[0]
      };
    case GETTING_CATEGORIES:
      return { ...state, gotCategories: false, gotCategoriesError: false };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case GET_CATEGORIES_ERROR:
      return { ...state, gotCategoriesError: true };
    default:
      return state;
  }
};

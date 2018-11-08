import {
  GET_CATEGORIES,
  GETTING_CATEGORIES,
  SET_CATEGORY
} from "../constants/categoryConstants";

const INITIAL_STATE = {
  categories: [],
  gotCategories: false,
  category: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

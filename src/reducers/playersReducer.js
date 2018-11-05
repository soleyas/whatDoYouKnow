import {
  GET_PLAYERS,
  ADD_PLAYER,
  REMOVE_PLAYER
} from "../constants/playerConstants";

const INITIAL_STATE = [
  { name: "Joi", score: 0 },
  { name: "Soley", score: 0 },
  { name: "Kolbeinn", score: 0 }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return state;
    case ADD_PLAYER:
      return [...state, { name: action.payload, score: 0 }];
    case REMOVE_PLAYER:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};

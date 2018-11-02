import { GET_PLAYERS, ADD_PLAYER } from '../constants/playerConstants';

const INITIAL_STATE = ['Joi', 'Soley', 'Kolbeinn'];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return state;
    case ADD_PLAYER:
      return [...state, action.payload];
    default:
      return state;
  }
};

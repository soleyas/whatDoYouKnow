import {
  GET_PLAYERS,
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREMENT_SCORE,
  CHANGE_PLAYER
} from '../constants/playerConstants';

const INITIAL_STATE = {
  players: [
    { name: 'Joi', score: 0 },
    { name: 'Soley', score: 0 },
    { name: 'Kolbeinn', score: 0 }
  ],
  currentPlayer: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, { name: action.payload, score: 0 }]
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(item => item !== action.payload)
      };
    case INCREMENT_SCORE:
      console.log('incrementReduxer');
      return {
        ...state,
        players: state.players.map((value, index) => {
          console.log(value);
          if (index === state.currentPlayer) {
            console.log('WOOHOO');
            return { ...value, score: value.score + 1 };
          }
          return value;
        })
      };
    case CHANGE_PLAYER:
      return {
        ...state,
        currentPlayer:
          state.currentPlayer < state.players.length - 1
            ? state.currentPlayer + 1
            : 0
      };

    default:
      return state;
  }
};

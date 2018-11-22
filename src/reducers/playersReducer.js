import {
  GET_PLAYERS,
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREMENT_SCORE,
  CHANGE_PLAYER,
  SET_WINNER,
  RESET_SCORE,
  GET_LAST_PLAYERS
} from '../constants/playerConstants';

const INITIAL_STATE = {
  players: [],
  currentPlayer: 0,
  winners: []
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
      return {
        ...state,
        players: state.players.map((value, index) => {
          if (index === state.currentPlayer) {
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
    case RESET_SCORE:
      return {
        ...state,
        players: state.players.map((value, index) => ({ ...value, score: 0 }))
      };
    case SET_WINNER:
      return { ...state, winners: action.payload };
    case GET_LAST_PLAYERS:
      return {
        ...state,
        players: action.payload !== null ? action.payload : state.players
      };

    default:
      return state;
  }
};

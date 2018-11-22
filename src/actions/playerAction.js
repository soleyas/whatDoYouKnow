import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREMENT_SCORE,
  CHANGE_PLAYER,
  SET_WINNER,
  RESET_SCORE,
  GET_LAST_PLAYERS
} from '../constants/playerConstants';
import Storage from '../storage';

export const getLastPlayers = () => {
  const storage = new Storage();
  return dispatch => {
    storage
      .getPlayersFromStorage()
      .then(value => dispatch(getLastPlayersSuccess(JSON.parse(value))))
      .catch();
  };
};

export const getLastPlayersSuccess = players => {
  return {
    type: GET_LAST_PLAYERS,
    payload: players
  };
};

export const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    payload: player
  };
};

export const resetScore = () => {
  return {
    type: RESET_SCORE,
    payload: null
  };
};

export const removePlayer = player => {
  return {
    type: REMOVE_PLAYER,
    payload: player
  };
};

export const incrementScore = () => {
  return {
    type: INCREMENT_SCORE,
    payload: null
  };
};

export const changePlayer = () => {
  return {
    type: CHANGE_PLAYER,
    payload: null
  };
};

export const setWinner = winners => {
  return {
    type: SET_WINNER,
    payload: winners
  };
};

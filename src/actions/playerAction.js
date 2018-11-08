import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  INCREMENT_SCORE,
  CHANGE_PLAYER,
  SET_WINNER
} from '../constants/playerConstants';

export const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    payload: player
  };
};

export const removePlayer = player => {
  return {
    type: REMOVE_PLAYER,
    payload: player
  };
};

export const incrementScore = () => {
  console.log('increment this shit');
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
  console.log('action');
  return {
    type: SET_WINNER,
    payload: winners
  };
};

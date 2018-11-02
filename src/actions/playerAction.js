import {
  GET_PLAYERS,
  ADD_PLAYER,
  REMOVE_PLAYER
} from "../constants/playerConstants";

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

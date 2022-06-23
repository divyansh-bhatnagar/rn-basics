import {UPDATE_USER, DELETE_USER, GETTING_USERS} from './actionType';

export const updateUser = payload => {
  return {
    type: UPDATE_USER,
    payload: payload,
  };
};

export const deleteUser = payload => {
  return {
    type: DELETE_USER,
    payload: payload,
  };
};

export const gettingUsers = payload => {
  return {
    type: GETTING_USERS,
    payload: payload,
  };
};

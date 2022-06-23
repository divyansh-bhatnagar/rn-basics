import {UPDATE_USER, DELETE_USER, GETTING_USERS} from './actionType';

const initialState = {
  users: [],
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UPDATE_USER:
      let updatedUsers = state.users.find(
        user => user.id === action.payload.id,
      );
      console.log('updatedUsers: ', updatedUsers);
      updatedUsers.name = action.payload.name;
      console.log('updatedUsers.name: ', action.payload.name);
      let upUserData = state.users.filter(
        user => user.id !== action.payload.id,
      );
      upUserData.push(updatedUsers);
      console.log('userData: ', upUserData);

      return {
        ...state,
        users: upUserData,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

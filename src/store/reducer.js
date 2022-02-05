import * as actions from './actionTypes';

const loggedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  words: [],
  user: loggedUser ? loggedUser : null,
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_WORDS:
      return {
        ...state,
        words: payload,
      };
    default:
      return state;
  }
};

export default appReducer;

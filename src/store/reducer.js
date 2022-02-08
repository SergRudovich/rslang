import * as actions from './actionTypes';

const loggedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  words: [],
  user: loggedUser ? loggedUser : null,
  wordsPage: 0,
  wordsCategory: 0,
  paginationCount: 30,
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case actions.LOGOUT:
      return {
        ...state,
        user: payload,
      };
    case actions.SET_WORDS:
      return {
        ...state,
        words: payload,
      };
    case actions.SET_WORDS_CATEGORY:
      return {
        ...state,
        wordsCategory: payload,
      };
    case actions.SET_WORDS_PAGE:
      return {
        ...state,
        wordsPage: payload,
      };
    default:
      return state;
  }
};

export default appReducer;

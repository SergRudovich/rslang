import * as actions from './actionTypes';

const loggedUser = JSON.parse(localStorage.getItem("user"));
const savedWordsPage = JSON.parse(localStorage.getItem("wordsPage"));
const savedWordsCategory = JSON.parse(localStorage.getItem("wordsCategory"));

const initialState = {
  words: [],
  userWords: [],
  user: loggedUser ? loggedUser : null,
  wordsPage: savedWordsPage ? savedWordsPage : 0,
  wordsCategory: savedWordsCategory ? savedWordsCategory : 0,
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
    case actions.SET_USER_WORDS:
      return {
        ...state,
        userWords: payload,
      };
    default:
      return state;
  }
};

export default appReducer;

import * as actions from './actionTypes';

export const loginSuccess = (user) => ({
  type: actions.LOGIN_SUCCESS,
  payload: user,
});

export const logoutUser = () => ({
  type: actions.LOGOUT,
  payload: null,
});

export const setWords = (words) => ({
  type: actions.SET_WORDS,
  payload: words,
});

export const setWordsCategory = (category) => ({
  type: actions.SET_WORDS_CATEGORY,
  payload: category,
});

export const setWordsPage = (page) => ({
  type: actions.SET_WORDS_PAGE,
  payload: page,
});
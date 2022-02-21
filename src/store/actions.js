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

export const setUserWords = (words) => ({
  type: actions.SET_USER_WORDS,
  payload: words,
});

export const setUserFilteredWords = (words) => ({
  type: actions.SET_USER_FILTERED_WORDS,
  payload: words,
});

export const showSpinner = () => ({
  type: actions.SHOW_SPINNER,
  payload: null,
});

export const hideSpinner = () => ({
  type: actions.HIDE_SPINNER,
  payload: null,
});

export const setSprintSequence = (sequence) => ({
  type: actions.SET_SPRINT_SEQUENCE,
  payload: sequence,
});

export const setAudiocallSequence = (sequence) => ({
  type: actions.SET_AUDIOCALL_SEQUENCE,
  payload: sequence,
});
import * as actions from './actionTypes';

export const setWords = (words) => ({
  type: actions.SET_WORDS,
  payload: words,
});
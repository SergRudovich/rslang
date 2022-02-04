import * as actions from './actionTypes';

export const setWords = (words: any) => ({
  type: SET_WORDS,
  payload: words,
});
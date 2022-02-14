import { API_URL, Http } from "../data/const";
import {
  setWords,
  setUserWords,
  setUserFilteredWords,
  showSpinner,
  hideSpinner
} from '../store/actions';

const getWords = (category, page) => async (dispatch) => {
  const response = await fetch(`${API_URL}/words?group=${category}&page=${page}`, {
    method: Http.GET,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const words = await response.json();
  dispatch(setWords(words));
};

const getUserWords = (userId, token) => async (dispatch) => {
  const response = await fetch(`${API_URL}/users/${userId}/words`, {
    method: Http.GET,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const userWords = await response.json();
  dispatch(setUserWords(userWords));
};

const createUserWord = (userId, wordId, word, token) => async (dispatch) => {
  const tryCreate = async (httpMethod) => {
    return await fetch(`${API_URL}/users/${userId}/words/${wordId}`, {
      method: httpMethod,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    });
  }
  const response = await tryCreate(Http.POST);
  if (response.status === 417) await tryCreate(Http.PUT);
  dispatch(getUserWords(userId, token));
};

const getUserWordsFiltered = (userId, filter, token) => async (dispatch) => {
  dispatch(showSpinner());
  const response = await fetch(`${API_URL}/users/${userId}/aggregatedWords?filter=${JSON.stringify(filter)}&wordsPerPage=1000`, {
    method: Http.GET,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const userFilteredWords = await response.json();
  dispatch(hideSpinner());
  dispatch(setUserFilteredWords(userFilteredWords));
};

const deleteUserWord = (userId, wordId, token) => async (dispatch) => {
  dispatch(showSpinner());
  await fetch(`${API_URL}/users/${userId}/words/${wordId}`, {
    method: Http.DELETE,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  dispatch(hideSpinner());
  dispatch(getUserWords(userId, token));
};

export {
  getWords,
  createUserWord,
  getUserWords,
  getUserWordsFiltered,
  deleteUserWord,
};

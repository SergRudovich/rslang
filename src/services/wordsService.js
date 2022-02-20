import { API_URL, Http, gameName, wordStatus } from "../data/const";
import {
  setWords,
  setUserWords,
  setUserFilteredWords,
} from '../store/actions';
import makeUserWord from "../helpers/makeUserWord";

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

const getUserWord = async (userId, wordId, token) => {
  return await fetch(`${API_URL}/users/${userId}/words/${wordId}`, {
    method: Http.GET,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}

const createUserWord = (userId, wordId, word, token) => async (dispatch) => {
  const tryCreate = async (httpMethod, newWord) => {
    return await fetch(`${API_URL}/users/${userId}/words/${wordId}`, {
      method: httpMethod,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWord)
    });
  }
  const response = await getUserWord(userId, wordId, token);
  if (response.status === 404) {
    const userWord = {
      difficulty: wordStatus.normal,
      optional: {
        [gameName.sprint]: {
          new: '',
          yes: 0,
          no: 0,
        },
        [gameName.audiocall]: {
          new: '',
          yes: 0,
          no: 0,
        },
      },
    };
    await tryCreate(Http.POST, makeUserWord(word, userWord));
  } else {
    const userWord = await response.json();
    delete userWord.id;
    delete userWord.wordId;
    await tryCreate(Http.PUT, makeUserWord(word, userWord));
  }
  dispatch(getUserWords(userId, token));
};

const getUserWordsFiltered = (userId, filter, token) => async (dispatch) => {
  // dispatch(showSpinner());
  const response = await fetch(`${API_URL}/users/${userId}/aggregatedWords?filter=${JSON.stringify(filter)}&wordsPerPage=1000`, {
    method: Http.GET,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const userFilteredWords = await response.json();
  // dispatch(hideSpinner());
  dispatch(setUserFilteredWords(userFilteredWords));
};

const deleteUserWord = (userId, wordId, token) => async (dispatch) => {
   fetch(`${API_URL}/users/${userId}/words/${wordId}`, {
    method: Http.DELETE,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  dispatch(getUserWords(userId, token));
};

export {
  getWords,
  createUserWord,
  getUserWords,
  getUserWordsFiltered,
  deleteUserWord,
};

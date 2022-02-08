import { API_URL, Http } from "../data/const";
import { setWords } from '../store/actions';

const getWords = (category, page) => async (dispatch) =>  {
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

export {
  getWords,
};
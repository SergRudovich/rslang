import { API_URL, Http } from "../data/const";
import { logoutUser, showSpinner, hideSpinner } from '../store/actions';

const createUser = user => async (dispatch) =>  {
  dispatch(showSpinner());
  const response = await fetch(`${API_URL}/users`, {
    method: Http.POST,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  dispatch(hideSpinner());
  if (response.ok) {
    return Promise.resolve('Регистрация прошла успешно. Выполняется вход.');
  } else {
    return Promise.reject(response.text());
  }
};

const loginUser = user => async (dispatch) => {
  dispatch(showSpinner());
  const response = await fetch(`${API_URL}/signin`, {
    method: Http.POST,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  dispatch(hideSpinner());
  if (response.ok) {
    const loggedUser = await response.json();
    loggedUser.email = user.email;
    return Promise.resolve(loggedUser);
  } else {
    return Promise.reject(response.text());
  }
};

const logout = (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logoutUser());
};

export {
  createUser,
  loginUser,
  logout,
};
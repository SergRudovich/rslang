import { API_URL, Http } from "../data/const";
import { LOGOUT } from '../store/actionTypes';

const createUser = user => async () =>  {
  const response = await fetch(`${API_URL}/users`, {
    method: Http.POST,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (response.ok) {
    return Promise.resolve('Регистрация прошла успешно. Выполняется вход.');
  } else {
    return Promise.reject(response.text());
  }
};

const loginUser = user => async () => {
  const response = await fetch(`${API_URL}/signin`, {
    method: Http.POST,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
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
  dispatch({
    type: LOGOUT,
    payload: null,
  });
  document.location.reload();
};

export {
  createUser,
  loginUser,
  logout,
};
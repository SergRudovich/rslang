import { API_URL } from "../data/const";
import { LOGOUT } from '../store/actionTypes';

const createUser = user => async () =>  {
  const responce = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (responce.ok) {
    return Promise.resolve('Регистрация прошла успешно. Выполняется вход.');
  } else {
    return Promise.reject(responce.text());
  }
};

const loginUser = user => async () => {
  const responce = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (responce.ok) {
    const loggedUser = await responce.json();
    loggedUser.email = user.email;
    return Promise.resolve(loggedUser);
  } else {
    return Promise.reject(responce.text());
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
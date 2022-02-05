import { createUser } from "../services/authService";

export const register = (user) => () => {
  return createUser(user)
    .then(
      (response) => {
        if (response.ok) {
          return Promise.resolve('Регистрация прошла успешно. Выполняется вход.');
        } else {
          return Promise.reject(response.text());
        }
      },
      () => {
        return Promise.reject(Promise.resolve('Ошибка сервера'));
      }
    )
};
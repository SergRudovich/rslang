import { API_URL } from "../data/const";

const createUser = async user => {
  const rawResponse = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();

  console.log(content);
};

const loginUser = async user => {
  const rawResponse = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();
  localStorage.setItem("user", content);
  console.log(content);
};

const logout = () => {
  localStorage.removeItem("user");
};

export {
  createUser,
  loginUser,
  logout,
};
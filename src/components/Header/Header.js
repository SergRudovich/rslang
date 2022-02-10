import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../services/authService';

function Header() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout(dispatch);
  }

  return (
    <div>
      <h1>Header</h1>

      <h3>
        {user ? <span>Вы вошли как: {user.email && user.email}</span> : <span>Привет гость!</span>}
      </h3>

      <Link to="/">Home </Link>
      <Link to="/textbook">textbook </Link>
      <Link to="/statistic">statistic </Link>
      <Link to="/audiocall">audiocall </Link>
      <Link to="/sprint">sprint </Link>

      {!user ?
        <Link to="/authorization">- Войдите или зарегистрируйтесь</Link> :
        <button onClick={handleLogout}>logout</button>
      }
    </div>
  );
}

export default Header;

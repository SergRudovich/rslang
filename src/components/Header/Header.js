import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../services/authService";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo">
          RS <span className="color-accent-light">Lang</span>
        </Link>
        <nav>
          <ul className="navigation">
            <li className="btn btn--dark">
              <Link to="/team-about">О команде</Link>
            </li>
            <li className="btn">
              <Link to="/textbook">Учебник слов</Link>
            </li>
            <li className="btn btn--dark">
              <Link to="/sprint?from=menu">Игра «Cпринт»</Link>
            </li>
            <li className="btn btn--dark ">
              <Link to="/audiocall">Игра «Аудиовызов»</Link>
            </li>
            <li className="btn ">
              <Link to="/statistic">Статистика</Link>
            </li>
          </ul>
        </nav>
        <div className="header__autorization">
          {!user ? (
            <Link to="/authorization" className="btn btn--outline-light">Войти</Link>
          ) : (
            <button className="btn btn--outline-light" onClick={handleLogout}>Выйти</button>
          )}
          {/* <h3>
            {user ? (
              <span>Привет: {user.email && user.email}</span>
            ) : (
              <span></span>
            )}
          </h3> */}
        </div>
      </div>
    </header>
  );
}

export default Header;

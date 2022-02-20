import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
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
        <NavLink to="/" className="logo">
          RS <span className="color-accent-light">Lang</span>
        </NavLink>
        <nav>
          <ul className="navigation">

            <li>
              <NavLink to="/team-about">О команде</NavLink>
            </li>
            <li>
              <NavLink to="/textbook" className="btn">
                Учебник
              </NavLink>
            </li>

            <li>
              <NavLink to="/sprint" className="btn btn--dark">
                Игра «Cпринт»
              </NavLink>

            </li>
            <li>
              <NavLink to="/audiocall" className="btn btn--dark">
                Игра «Аудиовызов»
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistic" className="btn btn--outline-dark">
                Статистика
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__autorization">
          {!user ? (
            <NavLink to="/authorization" className="btn btn--outline-light">
              Войти
            </NavLink>
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

import './authorization.css';
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isPasswordLength, isRequired } from '../../helpers/validators';
import avatar from '../../assets/img/auth_avatar.png';
import { loginUser } from '../../services/authService';
import { loginSuccess } from '../../store/actions';
import { getUserWords } from '../../services/wordsService';

function Authorization() {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onChangeEmail = (e) => {
    setMessage('');
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    setMessage('');
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      setLoading(true);
      dispatch(loginUser({ email, password }))
        .then((loggedUser) => {
          localStorage.setItem("user", JSON.stringify(loggedUser));
          dispatch(getUserWords(loggedUser.userId, loggedUser.token));
          dispatch(loginSuccess(loggedUser));
          return navigate('/textbook');
        })
        .catch((err) => {
          err.then(() => {
            setMessage('Incorrect e-mail or password');
            setLoading(false);
          })
        });
    }
  };

  return (
    <div className="auth-page container main__screen">
      <div className="card bg-light mb-3 auth-form-wrapper">
        <div className="card-body">
          <div className="text-center">
            <img
              src={avatar}
              alt="profile-img"
            />
          </div>
          <Form onSubmit={handleLogin} ref={form}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[isRequired, isEmail]}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Пароль</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[isRequired, isPasswordLength]}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Войти</span>
              </button>
              <Link to="/register">
                <button className="btn btn-secondary btn-block" disabled={loading}>
                  <span>Регистрация</span>
                </button>
              </Link>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Authorization;

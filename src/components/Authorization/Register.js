import './authorization.css';
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isPasswordLength, isRequired, isUsernameLength } from '../../helpers/validators';
import avatar from '../../assets/img/auth_avatar.png';

function Register() {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const message = '';

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      console.log('Ok');
    } else {
      setLoading(false);
    }
  };

  return (
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
            <label htmlFor="username" className="form-label">Ваше имя</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[isRequired, isUsernameLength]}
            />
          </div>

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

          <div className="form-group d-flex justify-content-between">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Зарегистрироваться</span>
            </button>
            <Link to="/authorization">
              <button className="btn btn-secondary btn-block" disabled={loading}>
                <span>Вход</span>
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
  );
}

export default Register;

import React from 'react';
import { PASSWORD_RANGE, USERNAME_RANGE } from '../data/const';

const errMessage = message => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
}

const isRequired = value => {
  if (!value) {
    return errMessage('This field is required!');
  }
};

const isEmail = value => {
  const validMail = String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!validMail) {
    return errMessage('This is not a valid email!');
  }
};

const isPasswordLength = (value) => {
  if (value.length < PASSWORD_RANGE.min || value.length > PASSWORD_RANGE.max) {
    return errMessage(`The password must be between ${PASSWORD_RANGE.min} and ${PASSWORD_RANGE.max} characters!`);
  }
};

const isUsernameLength = (value) => {
  if (value.length < USERNAME_RANGE.min || value.length > USERNAME_RANGE.max) {
    return errMessage(`The username must be between ${USERNAME_RANGE.min} and ${USERNAME_RANGE.max} characters!`);
  }
};

export {
  isRequired,
  isEmail,
  isPasswordLength,
  isUsernameLength
};
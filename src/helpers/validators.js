import React from 'react';
import validator from 'validator';

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
  if (!validator.isEmail(value)) {
    return errMessage('This is not a valid email!');
  }
};

const lengthMinMax = (value, type, range) => {
  if (value.length < range.min || value.length > range.max) {
    return errMessage(`The ${type} must be between ${range.min} and ${range.max} characters!`);
  }
};

export {
  isRequired,
  isEmail,
  lengthMinMax,
};
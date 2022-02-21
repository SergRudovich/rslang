import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { text } from "../../../../data/const";
import "./ButtonView.css";

const ButtonView = ({ isRightAnswer, handleClickButton, isFalseAnswer }) => {
  const { next, dontKnow } = text.ru.button;
  const buttonValue = isRightAnswer || isFalseAnswer ? next : dontKnow;


  let elems = document.getElementsByClassName("btn-primary");

  function onKeypressSound(e) {
    if (e.key === "Escape") elems[0].click();

    e.preventDefault();
  }

  useEffect(() => {
    window.addEventListener("keyup", onKeypressSound);
    return () => window.removeEventListener("keyup", onKeypressSound);
  });

  return (
    <Button
      variant="contained"
      size="large"
      className="button btn btn-primary"
      onClick={handleClickButton}
    >
      {buttonValue}
    </Button>
  );
};

ButtonView.propTypes = {
  isRightAnswer: PropTypes.bool,
  handleClickButton: PropTypes.func,
  isFalseAnswer: PropTypes.bool,
};

export default ButtonView;

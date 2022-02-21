import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./AnswerView.css";

const AnswerView = ({
  answer,
  handleClickAnswer,
  question,
  currentAnswerId,
  isRightAnswer,
  isFalseAnswer,
}) => {
  const answerItem = classNames(
    "item",
    { right: (isRightAnswer || isFalseAnswer) && answer.id === question.id },
    { wrong: isFalseAnswer && answer.id === currentAnswerId },
    { disable: isRightAnswer || isFalseAnswer }
  );

  let elems = document.getElementsByClassName("item");

  function onKeypressSound(e) {
    if (e.key === "1") elems[0].click();
    if (e.key === "2") elems[1].click();
    if (e.key === "3") elems[2].click();
    if (e.key === "4") elems[3].click();
    if (e.key === "5") elems[4].click();
    e.preventDefault();
  }

  useEffect(() => {
    window.addEventListener("keyup", onKeypressSound);
    return () => window.removeEventListener("keyup", onKeypressSound);
  });

  return (
    <li
      className={answerItem}
      key={answer.id}
      onClick={() => handleClickAnswer(answer.id)}
    >
      {answer.wordTranslate}
    </li>
  );
};

AnswerView.propTypes = {
  answer: PropTypes.object,
  handleClickAnswer: PropTypes.func,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
  isFalseAnswer: PropTypes.bool,
  currentAnswerId: PropTypes.string,
};

export default AnswerView;

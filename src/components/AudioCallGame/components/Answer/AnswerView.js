import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './AnswerView.css';

const AnswerView = ({
  answer,
  handleClickAnswer,
  question,
  currentAnswerId,
  isRightAnswer,
  isFalseAnswer,
}) => {
  const answerItem = classNames(
    'item',
    { 'right': ((isRightAnswer || isFalseAnswer) && answer.id === question.id) },
    { 'wrong': isFalseAnswer && answer.id === currentAnswerId },
    { 'disable': isRightAnswer || isFalseAnswer },
  );
  return (
  <li className={answerItem}
    key={answer.id}
    onClick = {() => handleClickAnswer(answer.id)}
  >{answer.wordTranslate}</li>
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

import React from 'react';
import PropTypes from 'prop-types';
import  './GamePageView.css';

import Question from '../Question';
import AnswerPanel from '../AnswerPanel';
import Button from '../Button';
import FinishGamePage from '../FinishGamePage';

const GamePageView = ({
  questionsList,
  level,
  answerArray,
  isRightAnswer,
  handleClickButton,
  errorAnswerArray,
  rightAnswerArray,
  isFalseAnswer,
  handleClickNewGame,
  handleClickAnswer,
  currentAnswerId,
}) => {
  const question = questionsList[level];
  return (
    question && answerArray
      ? (
      <div className='containerD'>
        <Question
          question = {question}
          isFalseAnswer = {isFalseAnswer}
          isRightAnswer= {isRightAnswer}
        />
        <AnswerPanel
          answerArray={answerArray}
          question={question}
          handleClickAnswer = {handleClickAnswer}
          isRightAnswer={isRightAnswer}
          isFalseAnswer={isFalseAnswer}
          currentAnswerId={currentAnswerId}
        />
        <Button
          isRightAnswer={isRightAnswer}
          handleClickButton={handleClickButton}
          isFalseAnswer={isFalseAnswer}
        />
      </div>
      )
      : <FinishGamePage
        handleClickNewGame={handleClickNewGame}
        rightAnswerArray={rightAnswerArray}
        errorAnswerArray={errorAnswerArray}
      />
  );
};

GamePageView.propTypes = {
  questionsList: PropTypes.array,
  answerArray: PropTypes.array,
  level: PropTypes.number,
  isRightAnswer: PropTypes.bool,
  changeLevel: PropTypes.func,
  countError: PropTypes.func,
  handleClickButton: PropTypes.func,
  isFalseAnswer: PropTypes.bool,
  handleClickAnswer: PropTypes.func,
  handleClickNewGame: PropTypes.func,
  currentAnswerId: PropTypes.string,
  errorAnswerArray: PropTypes.array,
  rightAnswerArray: PropTypes.array,
};

export default GamePageView;

import React from "react";
import PropTypes from "prop-types";
import "./AnswerPanelView.css";

import Answer from "../Answer";

const AnswerPanelView = ({
  answerArray,
  question,
  handleClickAnswer,
  isRightAnswer,
  isFalseAnswer,
  currentAnswerId,
}) => {
  const generateAnswers = () => {
    if (question && answerArray) {
      return answerArray.map((answer) => (
        <Answer
          isRightAnswer={isRightAnswer}
          isFalseAnswer={isFalseAnswer}
          handleClickAnswer={handleClickAnswer}
          question={question}
          answer={answer}
          key={answer.id}
          currentAnswerId={currentAnswerId}
        />
      ));
    }
    return null;
  };
  return <ol className="containerA">{generateAnswers()}</ol>;
};

AnswerPanelView.propTypes = {
  answerArray: PropTypes.array,
  question: PropTypes.object,
  handleClickAnswer: PropTypes.func,
  isRightAnswer: PropTypes.bool,
  isFalseAnswer: PropTypes.bool,
  currentAnswerId: PropTypes.string,
};

export default AnswerPanelView;

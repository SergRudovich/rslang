import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { VolumeUpRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import classNames from "classnames";
import "./QuestionView.css";

const QuestionView = ({
  isFalseAnswer,
  isRightAnswer,
  srcImage,
  id,
  word,
  audioElement,
}) => {
  const iconClasses = classNames({
    volumeUpRounded: !isFalseAnswer && !isRightAnswer,
  });
  const wordClasses = classNames("word", {
    hidden: !isFalseAnswer && !isRightAnswer,
  });
  const pictureClasses = classNames("picture", {
    hidden: !isFalseAnswer && !isRightAnswer,
  });

  function onKeypressSound(e) {
    if (e.key === "Enter") audioElement.play();
    e.preventDefault();
  }

  useEffect(() => {
    window.addEventListener("keyup", onKeypressSound);
    return () => window.removeEventListener("keyup", onKeypressSound);
  });

  return (
    <div className={"containerE"} dataid={id}>
      <img src={srcImage} alt={word} className={pictureClasses} />
      <div className={"description"}>
        <IconButton
          aria-label="audio"
          className={"iconButton"}
          onClick={() => audioElement.play()}
        >
          <VolumeUpRounded fontSize="large" className={iconClasses} />
        </IconButton>
        <p className={wordClasses}>{word}</p>
      </div>
    </div>
  );
};

QuestionView.propTypes = {
  isFalseAnswer: PropTypes.bool,
  isRightAnswer: PropTypes.bool,
  srcImage: PropTypes.string,
  id: PropTypes.string,
  word: PropTypes.string,
  audioElement: PropTypes.object,
};

export default QuestionView;

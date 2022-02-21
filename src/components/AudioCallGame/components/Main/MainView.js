import React, { useState } from "react";
import PropTypes from "prop-types";
import GamePage from "../GamePage";
import StartGamePage from "../StartGamePage";
import { useSearchParams } from "react-router-dom";

const MainView = ({
  handleChooseLevel,
  setNumberLevel,
  setNumberAnswers,
  handleSubmitForm,
  setFrom,
  level,
  numberAnswers,
  from,
  isStart,
  numberLevel,
  handleClickNewGame,
}) =>
  !isStart ? (
    <StartGamePage
      handleChooseLevel={handleChooseLevel}
      setNumberLevel={setNumberLevel}
      setNumberAnswers={setNumberAnswers}
      handleSubmitForm={handleSubmitForm}
      setFrom={setFrom}
    />
  ) : (
    <GamePage
      level={level}
      handleClickNewGame={handleClickNewGame}
      numberAnswers={numberAnswers}
      from={from}
      isStart={isStart}
      numberLevel={numberLevel}
    />
  );

MainView.propTypes = {
  handleChooseLevel: PropTypes.func,
  setNumberLevel: PropTypes.func,
  setNumberAnswers: PropTypes.func,
  handleSubmitForm: PropTypes.func,
  setFrom: PropTypes.func,
  handleClickNewGame: PropTypes.func,
  numberAnswers: PropTypes.number,
  from: PropTypes.string,
  isStart: PropTypes.bool,
  numberLevel: PropTypes.number,
};

export default MainView;

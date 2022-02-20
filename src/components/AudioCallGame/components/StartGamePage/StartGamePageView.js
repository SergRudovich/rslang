import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import SelectLevel from "../../../SprintGame/SelectLevel/SelectLevel";
import { getWords } from "../../../../services/wordsService";
import { useDispatch } from "react-redux";
import getRandomNum from "../../../../helpers/getRandomNum";
import "./StartGamePageView.css";
import { TextField, Button } from "@material-ui/core";
import {
  text,
  formLabel,
  gamesData,
  DIFFICULT_CATEGORY,
} from "../../../../data/const";

const StartGamePageView = ({
  handleChooseLevel,
  level,
  setNumberLevel,
  setNumberAnswers,
  setFrom,
  handleSubmitForm,
}) => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleSelectLevel = (level) => {
    dispatch(getWords(level, getRandomNum()));
    setIsDisabled(false);
  };

  const options = [];
  for (
    let numberLevel = 0;
    numberLevel <= DIFFICULT_CATEGORY;
    numberLevel += 1
  ) {
    options.push(
      <option
        value={numberLevel}
        key={numberLevel}
      >{`${formLabel.level} ${numberLevel}`}</option>
    );
  }
  return (
    <div className="containerF">
      <div className="titleStart">{gamesData.audiocall.title}</div>
      <div className="textStart">
        Тренировка улучшает восприятие английского на слух
      </div>
      {from === "menu" ? (
        <>
          <div className="sprint-start-label">
            Выберите уровень сложности слов
          </div>
          <SelectLevel handleSelectLevel={handleSelectLevel} />
        </>
      ) : (
        <>
          <div className="sprint-start-label">
            Будут использованы текущие слова из учебника.
          </div>
        </>
      )}
      <form className="form" onSubmit={handleSubmitForm}>
        <TextField
          required
          className="input"
          id="audiocall-start__questions"
          type="number"
          label={formLabel.questions}
          defaultValue="5"
          inputProps={{ pattern: "[0-9]", min: "5", max: "12" }}
          variant="filled"
          onChange={setNumberLevel}
        />
        <TextField
          required
          id="audiocall-start__questions"
          type="number"
          label={formLabel.answers}
          defaultValue="5"
          inputProps={{ pattern: "[2-5]", min: "2", max: "5" }}
          variant="filled"
          onChange={setNumberAnswers}
        />
        <Button type="submit" variant="contained" className="btn-start-el">
          {text.ru.button.startGame}
        </Button>
      </form>
    </div>
  );
};

StartGamePageView.propTypes = {
  handleChooseLevel: PropTypes.func,
  setNumberLevel: PropTypes.func,
  setNumberAnswers: PropTypes.func,
  handleSubmitForm: PropTypes.func,
  setFrom: PropTypes.func,
};

export default StartGamePageView;

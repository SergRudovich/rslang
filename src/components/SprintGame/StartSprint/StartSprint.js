import './StartSprint.css';
import React, { useState } from 'react';
import SelectLevel from '../SelectLevel/SelectLevel';
import { useDispatch } from "react-redux";
import { getWords } from '../../../services/wordsService';
import getRandomNum from '../../../helpers/getRandomNum';

function StartSprint({ handlePlayGame }) {

  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleSelectLevel = (level) => {
    dispatch(getWords(level, getRandomNum()));
    setIsDisabled(false);
  }

  return (
    <>
      <div className='sprint-start-title'>Спринт</div>
      <div className='sprint-start-description'>Спринт - это игра на скорость. Необходимо правильно
        ответить на как можно большее количество вопросов за 30 секунд</div>
      <div className='sprint-start-label'>Выберите уровень сложности слов</div>
      <SelectLevel handleSelectLevel={handleSelectLevel} />
      <button
        disabled={isDisabled}
        className='btn btn-primary sprint-start-btn'
        onClick={handlePlayGame}
      >Начать игру</button>
    </>
  );
}

export default StartSprint;

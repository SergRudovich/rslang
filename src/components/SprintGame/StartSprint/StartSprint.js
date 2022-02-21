import './StartSprint.css';
import React, { useState } from 'react';
import SelectLevel from '../SelectLevel/SelectLevel';
import { useDispatch, useSelector } from "react-redux";
import { getWords, getUserWords } from '../../../services/wordsService';
import getRandomNum from '../../../helpers/getRandomNum';

function StartSprint({ handlePlayGame, from }) {

  const [isDisabled, setIsDisabled] = useState(true);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSelectLevel = (level) => {
    dispatch(getWords(level, getRandomNum()));
    if (user) dispatch(getUserWords(user.userId, user.token));
    setIsDisabled(false);
  }

  return (
    <>
      <div className='sprint-start-title'>Спринт</div>
      <div className='sprint-start-description'>Спринт - это игра на скорость. Необходимо правильно
        ответить на как можно большее количество вопросов за 30 секунд</div>
      {(from === 'menu') ? <>
        <div className='sprint-start-label'>Выберите уровень сложности слов</div>
        <SelectLevel handleSelectLevel={handleSelectLevel} />
      </> :
        <>
          <div className='sprint-start-label'>
            Будут использованы текущие слова из учебника.
          </div>
        </>
      }
      <button
        disabled={(from === 'textbook') ? false : isDisabled}
        className='btn btn-primary sprint-start-btn'
        onClick={handlePlayGame}
      >Начать игру</button>
    </>
  );
}

export default StartSprint;

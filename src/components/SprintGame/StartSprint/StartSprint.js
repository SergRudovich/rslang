import './StartSprint.css';
import React, { useState } from 'react';
import SelectLevel from '../SelectLevel/SelectLevel';

function StartSprint({ handlePlayGame }) {

  const [gameLevel, setGameLevel] = useState(null);

  const startGame = () => {
    handlePlayGame(gameLevel);
  }

  const handleSelectLevel = (level) => {
    setGameLevel(level);
  }

  return (
    <>
      <div className='sprint-start-title'>Спринт</div>
      <div className='sprint-start-description'>Спринт - это игра на скорость. Необходимо правильно
        ответить на как можно большее количество вопросов за 30 секунд</div>
      <div className='sprint-start-label'>Выберите уровень сложности слов</div>
      <SelectLevel handleSelectLevel={handleSelectLevel} />
      <button
        className='btn btn-primary sprint-start-btn'
        onClick={startGame}
      >Начать игру</button>
    </>
  );
}

export default StartSprint;

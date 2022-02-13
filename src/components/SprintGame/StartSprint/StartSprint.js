import './StartSprint.css';
import React from 'react';
import SelectLevel from '../SelectLevel/SelectLevel';

function StartSprint({ handlePlayGame }) {
  return (
    <>
      <div className='sprint-start-title'>Спринт</div>
      <div className='sprint-start-description'>Спринт - это игра на скорость. Необходимо правильно
        ответить на как можно большее количество вопросов за 30 секунд</div>
      <div className='sprint-start-label'>Выберите уровень сложности слов</div>
      <SelectLevel />
      <button
        className='btn btn-primary sprint-start-btn'
        onClick={handlePlayGame}
      >Начать игру</button>
    </>
  );
}

export default StartSprint;

import './PlaySprint.css';
import React, { useState } from 'react';
import GameTimer from '../GameTimer/GameTimer';
import { SPRINT_TIMER } from '../../../data/const';

function PlaySprint({ getGameResult }) {

  const [gameCountY, setGameCountY] = useState(0);
  const [gameCountN, setGameCountN] = useState(0);
  const [word, setWord] = useState('Country');
  const [translate, setЕranslate] = useState('Страна');

  const timeOver = ()=>{
    getGameResult({
      yes: gameCountY,
      no: gameCountN,
    });
  }

  return (
    <>
      <GameTimer
        time={SPRINT_TIMER}
        timeOver={timeOver}
      />
      <div className='sprint-start-count'>
        <span>Счет:</span>
        <span className='sprint-start-countY'>{gameCountY}</span>
        <span>/</span>
        <span className='sprint-start-countN'>{gameCountN}</span>
      </div>
      <div className='sprint-start-question'>
        {word}
        <span className='sprint-start-question_label'> это </span>
        {translate}
        <span className='sprint-start-question_label'> ? </span>
      </div>
      <div className="btn-group answer-btns" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-success">Правильно</button>
        <button type="button" className="btn btn-danger">Не правильно</button>
      </div>
    </>
  );
}

export default PlaySprint;

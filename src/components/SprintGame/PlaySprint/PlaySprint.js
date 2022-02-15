/* eslint-disable react-hooks/exhaustive-deps */
import './PlaySprint.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { SPRINT_TIMER, MAX_WORDS_IN_PAGE } from '../../../data/const';
import getRandomNum from '../../../helpers/getRandomNum';

function PlaySprint({ getGameResult, setCorrectWord, setWrongWord }) {

  const [gameCountY, setGameCountY] = useState(0);
  const [gameCountN, setGameCountN] = useState(0);
  const [currentWord, setCurrentWord] = useState({});
  const [isTrueAnswer, setIsTrueAnswer] = useState(false);
  const [translate, setTranslate] = useState('');
  const [word, setWord] = useState('');
  const words = useSelector(state => state.words);
  const [timerValue, setTimerValue] = useState(SPRINT_TIMER);

  const getRundomWord = () => {
    const curr = words[getRandomNum(0, MAX_WORDS_IN_PAGE - 1)];
    if (getRandomNum(0, 1)) {
      setIsTrueAnswer(true);
      setTranslate(curr.wordTranslate);
    } else {
      setIsTrueAnswer(false);
      const transformRnd = words[getRandomNum(0, MAX_WORDS_IN_PAGE - 1)];
      if (transformRnd.wordTranslate === curr.wordTranslate) setIsTrueAnswer(true);;
      setTranslate(transformRnd.wordTranslate);
    }
    setWord(curr.word);
    setCurrentWord(curr);
  }

  useEffect(() => {
    getRundomWord();
  }, [])

  const timeOver = () => {
    getGameResult({
      yes: gameCountY,
      no: gameCountN,
    });
  }

  useEffect(() => {
    let interval = null;
    if (timerValue > 0) {
      interval = setInterval(() => {
        setTimerValue(timerValue - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      timeOver();
    }
    return () => clearInterval(interval);
  }, [timerValue]);

  const handleYes = () => {
    if (isTrueAnswer) {
      setGameCountY(gameCountY => gameCountY + 1);
      setCorrectWord(currentWord);
    } else {
      setGameCountN(gameCountN => gameCountN + 1);
      setWrongWord(currentWord);
    }
    getRundomWord();
  }

  const handleNo = () => {
    if (isTrueAnswer) {
      setGameCountN(gameCountN => gameCountN + 1);
      setWrongWord(currentWord);
    } else {
      setGameCountY(gameCountY => gameCountY + 1);
      setCorrectWord(currentWord);
    }
    getRundomWord();
  }

  return (
    <>
      <div>
        <h1>{timerValue}</h1>
      </div>
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
        <button
          type="button"
          className="btn btn-success"
          onClick={handleYes}
        >Правильно</button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleNo}
        >Не правильно</button>
      </div>
    </>
  );
}

export default PlaySprint;

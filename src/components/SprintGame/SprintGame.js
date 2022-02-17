import './SprintGame.css';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import StartSprint from './StartSprint/StartSprint';
import PlaySprint from './PlaySprint/PlaySprint';
import SprintResult from './SprintResult/SprintResult';
import { useSearchParams } from "react-router-dom";
import { setSprintSequence } from '../../store/actions';

let correctWords = new Map();
let wrongWords = new Map();

function SprintGame() {

  const [game, setGame] = useState({ isStart: true });
  const [gameResult, setGameResult] = useState({});
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const from = searchParams.get('from');

  const handlePlayGame = () => {
    setGame({ isPlay: true });
  }

  const getGameResult = (result) => {
    dispatch(setSprintSequence(result.maxSequence));
    setGame({ isResult: true });
    setGameResult(result);
  }

  const playAgain = () => {
    correctWords = new Map();
    wrongWords = new Map();
    setGame({ isStart: true });
  }

  const setWrongWord = (word) => {
    if (wrongWords.has(word)) {
      wrongWords.set(word, wrongWords.get(word) + 1);
    } else {
      wrongWords.set(word, 1);
    }
  }

  const setCorrectWord = (word) => {
    if (correctWords.has(word)) {
      correctWords.set(word, correctWords.get(word) + 1);
    } else {
      correctWords.set(word, 1);
    }
  }

  return (
    <div className='sprint-container'>
      {game.isStart && <StartSprint
        handlePlayGame={handlePlayGame}
        from={from}
      />}
      {game.isPlay && <PlaySprint
        getGameResult={getGameResult}
        setWrongWord={setWrongWord}
        setCorrectWord={setCorrectWord}
      />}
      {game.isResult && <SprintResult
        gameResult={gameResult}
        playAgain={playAgain}
        correctWords={correctWords}
        wrongWords={wrongWords}
      />}
    </div>
  );
}

export default SprintGame;

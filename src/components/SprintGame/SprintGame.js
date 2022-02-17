import './SprintGame.css';
import React, { useState } from 'react';
import StartSprint from './StartSprint/StartSprint';
import PlaySprint from './PlaySprint/PlaySprint';
import SprintResult from './SprintResult/SprintResult';
import { useSearchParams } from "react-router-dom";

let correctWords = new Map();
let wrongWords = new Map();

function SprintGame() {

  const [game, setGame] = useState({ isStart: true });
  const [gameResult, setGameResult] = useState({});
  const [searchParams] = useSearchParams();

  const from = searchParams.get('from');

  const handlePlayGame = () => {
    setGame({ isPlay: true });
  }

  const getGameResult = (result) => {
    console.log(correctWords)
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
      wrongWords.set(word, 0);
      if (correctWords.has(word)) {
        correctWords.set(word, {
          count: correctWords.get(word).count,
          seria: 0,
        });
      }
    }
  }

  const setCorrectWord = (word) => {
    if (correctWords.has(word)) {
      correctWords.set(word, {
        count: correctWords.get(word).count + 1,
        seria: correctWords.get(word).seria + 1,
      });
    } else {
      correctWords.set(word, { count: 0, seria: 0 });
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

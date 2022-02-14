import './SprintGame.css';
import React, { useState } from 'react';
import StartSprint from './StartSprint/StartSprint';
import PlaySprint from './PlaySprint/PlaySprint';
import SprintResult from './SprintResult/SprintResult';

function SprintGame() {

  const [game, setGame] = useState({ isStart: true });
  const [gameResult, setGameResult] = useState({});

  const handlePlayGame = (level) => {
    
    setGame({ isPlay: true });
  }

  const getGameResult = (result) => {
    setGame({ isResult: true });
    setGameResult(result);
  }

  const playAgain = () => {
    setGame({ isStart: true });
  }

  return (
    <div className='sprint-container'>
      {game.isStart && <StartSprint
        handlePlayGame={handlePlayGame}
      />}
      {game.isPlay && <PlaySprint
        getGameResult={getGameResult}
      />}
      {game.isResult && <SprintResult
        gameResult={gameResult}
        playAgain={playAgain}
      />}
    </div>
  );
}

export default SprintGame;

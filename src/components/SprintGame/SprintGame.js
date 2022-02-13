import './SprintGame.css';
import React, { useState } from 'react';
import StartSprint from './StartSprint/StartSprint';
import PlaySprint from './PlaySprint/PlaySprint';
import SprintResult from './SprintResult/SprintResult';

function SprintGame() {

  const [game, setGame] = useState({isStart: true});

  const handlePlayGame = () => {
    setGame({isPlay: true});
  }

  return (
    <div className='sprint-container'>
      {game.isStart && <StartSprint
        handlePlayGame={handlePlayGame}
      />}
      {game.isPlay && <PlaySprint />}
      {game.isResult && <SprintResult />}
    </div>
  );
}

export default SprintGame;

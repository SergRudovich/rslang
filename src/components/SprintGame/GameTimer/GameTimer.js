import './GameTimer.css';
import React, { useState, useEffect } from 'react';

function GameTimer({ time, timeOver }) {

  const [timerValue, setTimerValue] = useState(time);

  useEffect(() => {
    let interval = null;
    if (timerValue > 0) {
      interval = setInterval(() => {
        setTimerValue(timerValue => timerValue - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      timeOver();
    }
    return () => clearInterval(interval);
  }, [timerValue, timeOver]);

  return (
    <div>
      <h1>{timerValue}</h1>
    </div>
  );
}

export default GameTimer;

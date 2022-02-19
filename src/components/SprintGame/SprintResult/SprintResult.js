import './SprintResult.css';
import React from 'react';
import { Link } from "react-router-dom";
import ResultList from './ResultList';

function SprintResult({ gameResult, playAgain, wrongWords, correctWords }) {

  let result = Math.round(gameResult.yes / ((gameResult.yes + gameResult.no) / 100));
  if (Number.isNaN(result)) result = 0;

  return (
    <>
      <h1>Результат Спринта: {result}%</h1>
      <ResultList
        correctWords={correctWords}
        wrongWords={wrongWords}
      />
      <div className="btn-group sprint-result-btn" role="group" aria-label="Basic mixed styles example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={playAgain}
        >Играть еще раз</button>
        <Link to="/textbook">
          <button type="button" className="btn btn-primary">Перейти в учебник</button>
        </Link>
      </div>
    </>
  );
}

export default SprintResult;

import './SprintResult.css';
import React from 'react';
import { Link } from "react-router-dom";

function SprintResult({ gameResult, playAgain }) {

  return (
    <>
      <h1>SprintResult</h1>
      {gameResult.yes} | {gameResult.no}
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

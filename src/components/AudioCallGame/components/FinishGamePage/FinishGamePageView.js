import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { text } from '../../../../data/const';

import './FinishGamePageView.css';
import FinishGameItem from '../FinishGameItem';

const FinishGamePageView = ({ errorAnswerArray, rightAnswerArray, handleClickNewGame }) => {
  const generateItemsWords = (array) => (
    array.length !== 0 && array.map((word) => (
      <FinishGameItem
        key={word.id}
        word={word}
      />
    ))
  );

  return (
    <>
      <div className='containerC'>
        <div>
          <h2 className='title'>
            { text.ru.answersCorrect }
            <span className='right'>{rightAnswerArray.length}</span>
          </h2>
          {generateItemsWords(rightAnswerArray)}
        </div>
        <div>
          <h2 className='title'>
          { text.ru.answersMistaken }
            <span className='wrong'>{errorAnswerArray.length}</span>
          </h2>
          {generateItemsWords(errorAnswerArray)}
        </div>
      </div>
      <Button
        variant="contained"
        size="large"
        onClick={() => handleClickNewGame()}
        className='button'
      >
        { text.ru.button.newGame }
      </Button>
    </>
  );
};

FinishGamePageView.propTypes = {
  handleClickNewGame: PropTypes.func,
  errorAnswerArray: PropTypes.array,
  rightAnswerArray: PropTypes.array,
};

export default FinishGamePageView;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { text } from '../../../../data/const';

import './FinishGamePageView.css';
import FinishGameItem from '../FinishGameItem';
import { useDispatch, useSelector } from "react-redux";
import { createUserWord } from '../../../../services/wordsService';
import { gameName } from '../../../../data/const';

const FinishGamePageView = ({ errorAnswerArray, rightAnswerArray, handleClickNewGame }) => {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const generateItemsWords = (array) => {
    if (user) {
      for (let word of errorAnswerArray) {
        const userWord = {
          game: gameName.audiocall,
          yes: 1,
        };
        dispatch(createUserWord(user.userId, word.id, userWord, user.token));
      }
      for (let word of rightAnswerArray) {
        const userWord = {
          game: gameName.audiocall,
          no: 1,
        };
        dispatch(createUserWord(user.userId, word.id, userWord, user.token));
      }
    }

    return (
      array.length !== 0 && array.map((word) => (
        <FinishGameItem
          key={word.id}
          word={word}
        />
      ))
    );
  }

  return (
    <>
      <div className='containerC'>
        <div>
          <h2 className='title'>
            {text.ru.answersCorrect}
            <span className='right'>{rightAnswerArray.length}</span>
          </h2>
          {generateItemsWords(rightAnswerArray)}
        </div>
        <div>
          <h2 className='title'>
            {text.ru.answersMistaken}
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
        {text.ru.button.newGame}
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

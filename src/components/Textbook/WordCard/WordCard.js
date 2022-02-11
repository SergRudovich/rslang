import './WordCard.css';
import React from 'react';
import { API_URL, DIFFICULT_CATEGORY } from '../../../data/const';
import { useDispatch, useSelector } from "react-redux";
import { createUserWord, deleteUserWord, getUserWordsFiltered } from '../../../services/wordsService';
import getFilter from '../../../helpers/filters';

function WordCard(props) {

  const { word } = props;
  const imgUrl = `${API_URL}/${word.image}`;
  const user = useSelector(state => state.user);
  const wordsCategory = useSelector(state => state.wordsCategory);
  const dispatch = useDispatch();

  const addDifficulty = () => {
    const userWord = {
      difficulty: "difficult",
      optional: {}
    }
    dispatch(createUserWord(user.userId, word.id, userWord, user.token));
  }

  const removeDifficulty = () => {
    dispatch(deleteUserWord(user.userId, word._id, user.token));
    dispatch(getUserWordsFiltered(user.userId, getFilter('difficult'), user.token));
  }

  return (
    <div className='word-card'>
      <img src={imgUrl} alt="word"></img>
      <p>{word.word}</p>
      <p>{word.transcription}</p>
      <p>{word.wordTranslate}</p>
      {(user && wordsCategory !== DIFFICULT_CATEGORY) &&
        <>
          <button
            onClick={addDifficulty}
          >Сложное</button>
          <button>Изученное</button>
        </>
      }
      {(wordsCategory === DIFFICULT_CATEGORY) &&
        <button
          onClick={removeDifficulty}
        >Удалить из сложных</button>
      }
      <p>{word?.textMeaning}</p>
      <p>{word?.textMeaningTranslate}</p>
      <p>{word?.textExampleTranslate}</p>
    </div>
  );
}

export default WordCard;

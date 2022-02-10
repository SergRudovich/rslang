import './WordCard.css';
import React from 'react';
import { API_URL, DIFFICULT_CATEGORY } from '../../../data/const';
import { useDispatch, useSelector } from "react-redux";
import { createUserWord, getUserWords } from '../../../services/wordsService';

function WordCard(props) {

  const { word, category } = props;
  const imgUrl = `${API_URL}/${word.image}`;
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const addDifficulty = () => {
    const userWord = {
      difficulty: "difficult",
      optional: {}
    }
    dispatch(createUserWord(user.userId, word.id, userWord, user.token));
  }

  return (
    <div className='word-card'>
      <img src={imgUrl} alt="word"></img>
      <p>{word.word}</p>
      <p>{word.transcription}</p>
      <p>{word.wordTranslate}</p>
      {(user && category !== DIFFICULT_CATEGORY) &&
        <>
          <button
            onClick={addDifficulty}
          >Сложное</button>
          <button>Изученное</button>
        </>
      }
      {(category === DIFFICULT_CATEGORY) &&
        <button>Удалить из сложных</button>
      }
      <p>{word?.textMeaning}</p>
      <p>{word?.textMeaningTranslate}</p>
      <p>{word?.textExampleTranslate}</p>
    </div>
  );
}

export default WordCard;

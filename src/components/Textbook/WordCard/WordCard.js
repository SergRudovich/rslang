/* eslint-disable react-hooks/exhaustive-deps */
import './WordCard.css';
import React, { useEffect } from 'react';
import { API_URL, DIFFICULT_CATEGORY, wordStatus } from '../../../data/const';
import { useDispatch, useSelector } from "react-redux";
import { createUserWord, deleteUserWord, getUserWordsFiltered } from '../../../services/wordsService';
import getFilter from '../../../helpers/filters';
import useSound from 'use-sound';
import listenImg from '../../../assets/img/sound.png';

function WordCard(props) {

  const { word } = props;
  const imgUrl = `${API_URL}/${word.image}`;
  const user = useSelector(state => state.user);
  const wordsCategory = useSelector(state => state.wordsCategory);
  const dispatch = useDispatch();
  const [playAudio] = useSound(`${API_URL}/${word.audio}`, {
    interrupt: true,
  });
  const [playAudioMeaning, { stop: meaningStop }] = useSound(`${API_URL}/${word.audioMeaning}`, {
    interrupt: true,
  });
  const [playAudioExample] = useSound(`${API_URL}/${word.audio}`, {
    interrupt: true,
  });

  useEffect(() => {
    return () => {
      meaningStop()
    }
  });

  const playWord = () => {
    playAudio();
    setTimeout(() => playAudioMeaning(), 2400);
    setTimeout(() => playAudioExample(), 1200);
  }

  const addDifficulty = () => {
    const userWord = {
      difficulty: wordStatus.difficult,
    }
    dispatch(createUserWord(user.userId, word.id, userWord, user.token));
  }

  const addLearned = () => {
    const userWord = {
      difficulty: wordStatus.learned,
    }
    dispatch(createUserWord(user.userId, word.id, userWord, user.token));
  }

  const removeDifficulty = () => {
    dispatch(deleteUserWord(user.userId, word._id, user.token));
    setTimeout(() => {
      dispatch(getUserWordsFiltered(user.userId, getFilter(wordStatus.difficult), user.token));
    }, 300)
  }

  return (
    <div className='word-card'>
      <img src={imgUrl} alt="word"></img>
      <p>{word.word}</p>
      <div className='word-card-sound'>
        <span>{word.transcription}</span>
        <div
          className='result-list-item_img'
          style={{
            backgroundImage: `url(${listenImg})`,
          }}
          onClick={playWord}
        ></div>
      </div>
      <p>{word.wordTranslate}</p>
      {(user && wordsCategory !== DIFFICULT_CATEGORY) &&
        <>
          <button
            className='btn'
            onClick={addDifficulty}
          >Сложное</button>
          <button
            className='btn'
            onClick={addLearned}
          >Изученное</button>
        </>
      }
      {(wordsCategory === DIFFICULT_CATEGORY) &&
        <button
          className='btn'
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

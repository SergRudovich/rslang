import './WordCard.css';
import React from 'react';
import { API_URL } from '../../../data/const';

function WordCard(props) {

  const { word } = props;
  const imgUrl = `${API_URL}/${word.image}`;

  return (
    <div className='word-card'>
      <img src={imgUrl} alt="word"></img>
      <p>{word.word}</p>
      <p>{word.transcription}</p>
      <p>{word.wordTranslate}</p>
      <p>{word?.textMeaning}</p>
      <p>{word?.textMeaningTranslate}</p>
      <p>{word?.textExampleTranslate}</p>
    </div>
  );
}

export default WordCard;

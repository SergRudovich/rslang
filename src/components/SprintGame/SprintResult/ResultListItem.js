import './SprintResult.css';
import React from 'react';
import listenImg from '../../../assets/img/sound.png';
import useSound from 'use-sound';
import { API_URL } from '../../../data/const';

function ResultListItem({ word, audio, wordTranslate }) {
  const [play] = useSound(`${API_URL}/${audio}`, {
    interrupt: true,
  });
  return (
    <div className='result-list-item'>
      <div
        className='result-list-item_img'
        style={{
          backgroundImage: `url(${listenImg})`,
        }}
        onClick={play}
      ></div>
      <span><strong>{word}</strong> - {wordTranslate}</span>
    </div>
  );
}

export default ResultListItem;

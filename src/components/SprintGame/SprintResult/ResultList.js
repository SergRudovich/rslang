import './SprintResult.css';
import React from 'react';
import ResultListItem from './ResultListItem';

function ResultList({ wrongWords, correctWords }) {

  return (
    <div className='result-list-container'>
      <div className='result-list-label'>
        <span>Ошибок в словах:</span>
        <div>{wrongWords.size}</div>
      </div>
      {Array.from(wrongWords.keys()).map(word =>
        <ResultListItem
          key={word.id}
          word={word.word}
          audio={word.audio}
          wordTranslate={word.wordTranslate}
        />
      )}
      <div className='result-list-line'></div>
      <div className='result-list-label'>
        <span>Правильных слов:</span>
        <div className='correct-color'>{correctWords.size}</div>
      </div>
      {Array.from(correctWords.keys()).map(word =>
        <ResultListItem
          key={word.id}
          word={word.word}
          audio={word.audio}
          wordTranslate={word.wordTranslate}
        />
      )}
    </div>
  );
}

export default ResultList;

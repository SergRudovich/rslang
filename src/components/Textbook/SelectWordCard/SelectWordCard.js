import './SelectWordCard.css';
import React from 'react';

function SelectWordCard(word) {

  return (
    <div className='word-select-card vertical'>
      <div className='front'
        style={{
          backgroundColor: (word.isActive) ? 'beige' : word.categoryColor,
        }}
        onClick={() => word.handleSelectWord(word.id)}
      >
        {word.word}
        {word.difficulty && 
        <p>{word.difficulty}</p>
        }
      </div>
      <div className='back'
        onClick={() => word.handleSelectWord(word.id)}
      >
        {word.wordTranslate}
        {word.difficulty && 
        <p>{word.difficulty}</p>
        }
      </div>
    </div>
  );
}

export default SelectWordCard;

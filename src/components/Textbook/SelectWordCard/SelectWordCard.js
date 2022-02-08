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
      </div>
      <div className='back'
        onClick={() => word.handleSelectWord(word.id)}
      >
        {word.wordTranslate}
      </div>
    </div>
  );
}

export default SelectWordCard;

import './SelectWordCard.css';
import React from 'react';
import { wordStatus } from '../../../data/const';

function SelectWordCard(word) {

  const statusColor = {
    [wordStatus.difficult]: '#ED4F32',
    [wordStatus.learned]: 'green',
  }

  const statusColorBg = {
    [wordStatus.difficult]: 'Tan',
    [wordStatus.learned]: 'MediumAquamarine	',
  }

  const cardBg = () => {
    if (word.isActive) return 'beige';
    return (word.difficulty) ? statusColorBg[word.difficulty] : word.categoryColor;
  }

  const statusAlert = <>
    <p className='word-status-message'
      style={{
        color: statusColor[word.difficulty],
      }}
    >{word.difficulty}</p>
    <div className='word-status'
      style={{
        backgroundColor: statusColor[word.difficulty],
      }}
    ></div>
  </>

  const delButton = <button className='btn btn-secondary'>
    удалить
  </button>

return (
  <div className='word-select-card vertical'>
    <div className='front'
      style={{
        backgroundColor: cardBg(),
      }}
      onClick={() => word.handleSelectWord(word.id)}
    >
      {word.word}
      {word.difficulty && statusAlert}
      {word.inLearned && delButton}
    </div>
    <div className='back'
      onClick={() => word.handleSelectWord(word.id)}
    >
      {word.wordTranslate}
      {word.difficulty && statusAlert}
      {word.inLearned && delButton}
    </div>
  </div>
);
}

export default SelectWordCard;

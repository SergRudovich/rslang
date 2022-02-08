import './Words.css';
import React, { useEffect, useState } from 'react';
import SelectWordCard from '../SelectWordCard/SelectWordCard';
import { useDispatch, useSelector } from "react-redux";
import { getWords } from '../../../services/wordsService';

function Words() {

  const categoryColor = ['#b2e15f', '#73b3e1', '#6c70de', '#f78278', '#d5bd65', '#c5a334', '#b8b8b8'];
  const dispatch = useDispatch();
  const words = useSelector(state => state.words);
  const wordsCategory = useSelector(state => state.wordsCategory);
  const [selectedWord, setSelectedWord] = useState(0);

  useEffect(() => {
    dispatch(getWords('0', '0'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getWords(wordsCategory, '0'));
    setSelectedWord(0);
  }, [dispatch, wordsCategory]);

  const handleSelectWord = (id) => {
    setSelectedWord(id);
  }

  return (
    <div>
      <div className='word-select-wrapper'>
        {words.map((word, index) =>
          <SelectWordCard
            key={word.id}
            id={index}
            word={word.word}
            isActive={(index === selectedWord) ? true : false}
            wordTranslate={word.wordTranslate}
            categoryColor={categoryColor[wordsCategory]}
            handleSelectWord={handleSelectWord}
          />
        )}
      </div>
      <div className='selected-word-wrapper'>

      </div>
    </div>
  );
}

export default Words;

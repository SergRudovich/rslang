import './Words.css';
import React, { useEffect, useState } from 'react';
import SelectWordCard from '../SelectWordCard/SelectWordCard';
import { useDispatch, useSelector } from "react-redux";
import { getWords } from '../../../services/wordsService';
import WordCard from '../WordCard/WordCard';

function Words() {

  const categoryColor = ['#b2e15f', '#73b3e1', '#6c70de', '#f78278', '#d5bd65', '#c5a334', '#b8b8b8'];
  const dispatch = useDispatch();
  const words = useSelector(state => state.words);
  const wordsCategory = useSelector(state => state.wordsCategory);
  const [selectedWordId, setSelectedWordId] = useState(0);
  const [selectedWord, setSelectedWord] = useState({});

  useEffect(() => {
    dispatch(getWords('0', '0'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getWords(wordsCategory, '0'));
    setSelectedWordId(0);
  }, [dispatch, wordsCategory]);

  useEffect(() => {
    setSelectedWord(words[0]);
  }, [dispatch, words]);

  const handleSelectWord = (id) => {
    setSelectedWordId(id);
    setSelectedWord(words[id]);
  }

  return (
    <div className='words-wrapper'>
      <div className='word-select-wrapper'>
        {words.map((word, index) =>
          <SelectWordCard
            key={word.id}
            id={index}
            word={word.word}
            isActive={(index === selectedWordId) ? true : false}
            wordTranslate={word.wordTranslate}
            categoryColor={categoryColor[wordsCategory]}
            handleSelectWord={handleSelectWord}
          />
        )}
      </div>
      <div className='selected-word-wrapper'>
        <WordCard
          word={selectedWord}
        />
      </div>
    </div>
  );
}

export default Words;

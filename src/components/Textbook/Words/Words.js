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
  const user = useSelector(state => state.user);
  const wordsPage = useSelector(state => state.wordsPage);
  const userWords = useSelector(state => state.userWords);
  const wordsCategory = useSelector(state => state.wordsCategory);
  const [selectedWordId, setSelectedWordId] = useState(0);
  const [selectedWord, setSelectedWord] = useState();

  useEffect(() => {
    dispatch(getWords(wordsCategory, wordsPage));
    setSelectedWordId(0);
  }, [dispatch, wordsCategory, wordsPage]);

  useEffect(() => {
    setSelectedWord(words[0]);
  }, [words]);

  const handleSelectWord = (id) => {
    setSelectedWordId(id);
    setSelectedWord(words[id]);
  }

  const isDifficult = (id) => {
    if (user) {
      const userWord = userWords.find(word => word.wordId === id)
      return (userWord) ? (userWord.difficulty === 'difficult') : false;
    } else {
      return false;
    }
  }

  return (
    <div className='words-wrapper'>
      <div className='word-select-wrapper'>
        {words.map((word, index) =>
          <SelectWordCard
            key={word.id}
            id={index}
            word={word.word}
            category={wordsCategory}
            isActive={(index === selectedWordId) ? true : false}
            wordTranslate={word.wordTranslate}
            categoryColor={categoryColor[wordsCategory]}
            handleSelectWord={handleSelectWord}
            isDifficult={isDifficult(word.id)}
          />
        )}
      </div>
      <div className='selected-word-wrapper'>
        {selectedWord && <WordCard
          word={selectedWord}
        />
        }
      </div>
    </div>
  );
}

export default Words;

import './Words.css';
import React, { useEffect, useState } from 'react';
import SelectWordCard from '../SelectWordCard/SelectWordCard';
import { useDispatch, useSelector } from "react-redux";
import { getWords, getUserWordsFiltered, getUserWords } from '../../../services/wordsService';
import WordCard from '../WordCard/WordCard';
import { DIFFICULT_CATEGORY } from '../../../data/const';
import getFilter from '../../../helpers/filters';
import { wordStatus } from '../../../data/const';

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
    if (user) dispatch(getUserWords(user.userId, user.token));
    wordsCategory !== DIFFICULT_CATEGORY ?
      dispatch(getWords(wordsCategory, wordsPage)) :
      dispatch(getUserWordsFiltered(user.userId, getFilter(wordStatus.difficult), user.token));
    setSelectedWordId(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, wordsCategory, wordsPage]);

  useEffect(() => {
    setSelectedWord(words[0]);
  }, [words]);

  const handleSelectWord = (id) => {
    setSelectedWordId(id);
    setSelectedWord(words[id]);
  }

  const getWordStatus = (id) => {
    if (user) {
      const userWord = userWords.find(word => word.wordId === id)
      return (userWord?.difficulty) ? userWord.difficulty : '';
    } else {
      return '';
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
              difficulty={getWordStatus(word.id)}
            />
          ) 
        }
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

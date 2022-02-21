import './Words.css';
import React, { useEffect, useState } from 'react';
import SelectWordCard from '../SelectWordCard/SelectWordCard';
import { useDispatch, useSelector } from "react-redux";
import { getWords, getUserWordsFiltered, getUserWords } from '../../../services/wordsService';
import WordCard from '../WordCard/WordCard';
import { DIFFICULT_CATEGORY, CATEGORY_COLOR, FRONT_CARD } from '../../../data/const';
import getFilter from '../../../helpers/filters';
import { wordStatus } from '../../../data/const';

function Words() {

  const dispatch = useDispatch();
  const words = useSelector(state => state.words);
  const user = useSelector(state => state.user);
  const wordsPage = useSelector(state => state.wordsPage);
  const userWords = useSelector(state => state.userWords);
  const wordsCategory = useSelector(state => state.wordsCategory);
  const [selectedWordId, setSelectedWordId] = useState(0);
  const [selectedWord, setSelectedWord] = useState();
  const [value, setValue] = useState((localStorage.getItem('frontCard'))
    ? localStorage.getItem('frontCard') : FRONT_CARD.en);

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

  const onChangeCard = (e) => {
    setValue(e.target.id);
    localStorage.setItem('frontCard', e.target.id)
  }

  return (
    <div className='words-wrapper'>
      <div className='word-select-wrapper'>
        <div className='word-radio-wrapper'>
          <input
            type="radio"
            value={FRONT_CARD.en}
            name="frontWord"
            checked={value === FRONT_CARD.en ? true : false}
            onChange={onChangeCard}
          />
          <label id={FRONT_CARD.en} onClick={onChangeCard}>En</label>
          <input
            type="radio"
            value={FRONT_CARD.ru}
            name="frontWord"
            checked={value === FRONT_CARD.ru ? true : false}
            onChange={onChangeCard}
          />
          <label id={FRONT_CARD.ru} onClick={onChangeCard}>Ru</label>
          <input
            type="radio"
            value={FRONT_CARD.en_ru}
            name="frontWord"
            checked={value === FRONT_CARD.en_ru ? true : false}
            onChange={onChangeCard}
          />
          <label id={FRONT_CARD.en_ru} onClick={onChangeCard}>En + Ru</label>
        </div>
        {words.map((word, index) =>
          <SelectWordCard
            key={(word._id) ? word._id : word.id}
            id={index}
            word={(value === FRONT_CARD.en)
              ? word.word
              : (value === FRONT_CARD.ru)
                ? word.wordTranslate
                : word.word}
            front={(value === FRONT_CARD.en_ru)
              ? word.wordTranslate
              : ''}
            category={wordsCategory}
            isActive={(index === selectedWordId) ? true : false}
            wordTranslate={(value === FRONT_CARD.en)
              ? word.wordTranslate
              : (value === FRONT_CARD.ru)
                ? word.word : word.word
            }
            back={(value === FRONT_CARD.en_ru)
              ? word.wordTranslate
              : ''}
            categoryColor={CATEGORY_COLOR[wordsCategory]}
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

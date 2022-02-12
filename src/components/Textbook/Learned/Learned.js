import './Learned.css';
import React, { useEffect } from 'react';
import SelectWordCard from '../SelectWordCard/SelectWordCard';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserWordsFiltered, deleteUserWord } from '../../../services/wordsService';
import getFilter from '../../../helpers/filters';
import { wordStatus } from '../../../data/const';

function Learned() {

  const words = useSelector(state => state.words);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWordsFiltered(user.userId, getFilter(wordStatus.learned), user.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeLearnedWord = (id) => {
    dispatch(deleteUserWord(user.userId, id, user.token));
    dispatch(getUserWordsFiltered(user.userId, getFilter(wordStatus.learned), user.token));
  }

  return (
    <div className='textbook-wrapper'>
      <h1><Link to="/textbook">Учебник</Link>
        {user &&
          <>
            <span> | </span>
            <Link to="/learned">Изученные слова </Link>
          </>
        }
      </h1>
      <div className='word-learned-wrapper'>
        {words.map((word, index) =>
          <SelectWordCard
            key={word._id}
            id={word._id}
            word={word.word}
            isActive={false}
            wordTranslate={word.wordTranslate}
            categoryColor={'beige'}
            handleSelectWord={removeLearnedWord}
            difficulty={null}
            inLearned={true}
          />
        )
        }
      </div>
    </div>
  );
}

export default Learned;

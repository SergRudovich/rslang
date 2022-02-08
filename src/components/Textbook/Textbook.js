import './Textbook.css';
import React from 'react';
import WordCategories from './WordCategories/WordCategories';
import Words from './Words/Words';
import Pagination from './Pagination/Pagination';

function Textbook() {
  return (
    <div className='textbook-wrapper'>
      <h1>Учебник</h1>
      <h3>Уровни сложности слов</h3>
      <WordCategories />
      <h1>Слова</h1>
      <Words />
      <Pagination />
      <h1>Игры</h1>
      <h3>Закрепи изученное играючи</h3>
    </div>
  );
}

export default Textbook;

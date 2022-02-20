import './Textbook.css';
import React from 'react';
import WordCategories from './WordCategories/WordCategories';
import Words from './Words/Words';
import Paginate from './Paginate/Paginate';
import { useSelector } from "react-redux";
import { DIFFICULT_CATEGORY } from '../../data/const';
import { Link } from "react-router-dom";
import GameCard from './GameCard/GameCard';
import GameCardImage2 from "./../../assets/best/audio-dog.jpg";
import GameCardImage1 from "./../../assets/best/sprint-dog-white.jpg";

function Textbook() {

  const wordsCategory = useSelector(state => state.wordsCategory);
  const user = useSelector(state => state.user);

  return (

    <div className="textbook-wrapper">
      <h1>
        <Link to="/textbook">Учебник</Link>
        {user && (

          <>
            <span> | </span>
            <Link to="/learned">Изученные слова </Link>
          </>
        )}
      </h1>
      <h3>Уровни сложности слов</h3>
      <WordCategories />
      <h1>Слова</h1>
      <Words />

      {wordsCategory !== DIFFICULT_CATEGORY &&
        <>
          <Paginate />
          <h1>Игры</h1>
          <h3><Link to="/sprint?from=textbook">Спринт</Link></h3>
          <h3><Link to="/audiocall">Аудиовызов</Link></h3>
    <div className="game-card__container">
        <Link to="/sprint">
          <GameCard
            gameName="Спринт"
            gameTarget="Перевод на скорость"
            gameDescription="Определи как можно быстрее: верный перевод слова или нет"
            gameImage={GameCardImage1}
          ></GameCard>
        </Link>
        <Link to="/audiocall">
          <GameCard
            gameName="Аудиовызов"
            gameTarget="Аудирование"
            gameDescription="Определи, какое слово было произнесено"
            gameImage={GameCardImage2}
          ></GameCard>
        </Link>
      </div>
        </>
      }

    </div>
  );
}

export default Textbook;

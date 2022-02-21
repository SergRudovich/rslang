import React from "react";
import "./MainPage.css";
import mainFoto from "./../../assets/img/04.jpg";
import GameCard from "../Textbook/GameCard/GameCard";
import GameCardImage1 from "./../../assets/img/sprint-dog.jpg";
import GameCardImage2 from "./../../assets/img/audio-dog.jpg";
import GameCardImage3 from "./../../assets/img/01.jpg";
import GameCardImage4 from "./../../assets/img/02.jpg";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main className="page__main main__screen container">
      <div className="main__row container">
        <div className="main__text">
          <h1 className="main__title title-1">
            Ты хочешь прокачать свой английский?<br></br>Тогда ты попал в
            правильное место!
          </h1>
          <div className="benefits">
            <h3 className="benefits__title title-3">
              В <span>RS</span> <span className="color-accent-light">Lang</span>{" "}
              тебя ждет:
            </h3>
            <ul className="benefits__list">
              <li className="benefits__item">
                изучение наиболее употребимых слов английского языка
              </li>
              <li className="benefits__item">разные игры со словами</li>
              <li className="benefits__item">
                статистика твоих результатов (для авторизованных пользователей)
              </li>
            </ul>
          </div>
        </div>
        <div className="main__image">
          <img src={mainFoto} alt="study English"></img>
        </div>
      </div>

      <div className="game-card__container">
        <GameCard
          gameName="Учебник"
          gameTarget="Изучение новых слов"
          gameDescription="Около 4000 тысяч наиболее употребимых слов, разбитых на 6 уровней сложности от А1 до С1 для удобного изучения, с удобной навигацией по страницам"
          gameImage={GameCardImage3}
        ></GameCard>
        <GameCard
          gameName="Спринт"
          gameTarget="Перевод на скорость"
          gameDescription="Мини-игра: определи верный перевод слова за заданное время как можно быстрее"
          gameImage={GameCardImage1}
        ></GameCard>

        <GameCard
          gameName="Аудиовызов"
          gameTarget="Аудирование"
          gameDescription="Мини-игра: определи, какое слово было произнесено. Можно выбрать уровень сложности слов"
          gameImage={GameCardImage2}
        ></GameCard>

        <GameCard
          gameName="Статистика"
          gameTarget="Отмечать результат"
          gameDescription="Зарегестрированный пользователь может следить за своим прогрессом при изучении слов, создавать свой личный список сложных слов для повторения, видеть статистику по играм"
          gameImage={GameCardImage4}
        ></GameCard>
      </div>
    </main>
  );
}

export default MainPage;

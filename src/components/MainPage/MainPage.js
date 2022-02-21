import React from 'react';
import './MainPage.css';
import mainFoto from './../../assets/img/04.jpg';

function MainPage() {
  return (
    <main>
        <div className="main__screen main__row container">
          <div className="main__text">
            <h1 className="title-1">
              Ты хочешь прокачать свой английский?<br></br>Тогда ты попал в
              правильное место!
            </h1>
            <div className="benefits">
              <h3 className="benefits__title title-3">
                В <span>RS</span>{" "}
                <span className="color-accent-light">Lang</span> тебя ждет:
              </h3>
              <ul className="benefits__list">
                <li className="benefits__item">
                  изучение наиболее употребимых слов английского языка
                </li>
                <li className="benefits__item">разные игры со словами</li>
                <li className="benefits__item">
                  статистика твоих результатов (для авторизованных
                  пользователей)
                </li>
              </ul>
            </div>
          </div>
          <div className="main__image">
            <img src={mainFoto} alt="study English"></img>
          </div>
        </div>
    </main>
  );
}

export default MainPage;

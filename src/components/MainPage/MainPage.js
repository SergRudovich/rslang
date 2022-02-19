import React from 'react';
import './MainPage.css';
import mainFoto from './../../assets/img/04.jpg';

function MainPage() {
  return (
    <main>
      <div className="container">
        <div className="main__screen main__row">
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

        <div className="examples">
          <div className="ex bg-color-1">
            var(--accent-p4321-1) ТОЛЬКО для ярких элементов
          </div>
          <div className="ex bg-color-2">var(--accent-p4321-2 footer)</div>
          <div className="ex bg-color-3">var(--accent-p4321-3)</div>
          <div className="ex bg-color-4">var(--accent-p4321-4);</div>
          <div className="ex bg-color-5">var(--accent-p4321-5);</div>
          <div className="ex bg-color-6">
            var(--accent-p4321-6) фоновый цвет body
          </div>
          <div className="ex bg-color-7">var(--accent-p4321-7);</div>
          <div className="ex bg-color-8">var(--accent-p4321-8);</div>
          <div className="ex bg-color-9">var(--accent-p4321-9) </div>
          <div className="ex bg-color-10">var(--accent-p4321-10) </div>

          <div className="ex bg-color-11">var(--accent-dark1)</div>
          <div className="ex bg-color-dark">var(--accent-dark2) hover</div>

          <div className="ex bg-color-danger">
            var(--danger)<br></br>НЕ правильный ответ
          </div>
          <div className="ex bg-color-success">
            var(--success) правильный ответ
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;

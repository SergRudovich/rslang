import React from "react";
import "./TeamAbout.css";

function TeamAbout() {
  return (
    <article className="about-team bg-color-5">
      <div className="container main__screen ">
        <h1 className="title-2">Команда разработчиков</h1>
        <p className="about-team__text">
          Приложение разрабатывали с использованием библиотеки React + Redux
        </p>
        <div className="about-team__row">
          <div className="about-team__item">
            <div className="about-team__foto">
              <div className="about-team__card-text">
                <p>
                  <span>Sergey</span> Rudovich
                </p>
                <p className="about-team__role">team lead, developer</p>
              </div>
            </div>
            <div className="about-team__github">
              <a href="https://github.com/SergRudovich" target="_blank" rel="noreferrer">
                SergRudovich
              </a>
            </div>
            <div className="about-team__contribution">
              Разработал «Учебник» со словами, игру «Спринт», авторизацию
              пользователей в приложении, роутинг по страницам
            </div>
          </div>
          <div className="about-team__item">
            <div className="about-team__foto">
              <div className="about-team__card-text">
                <p>
                  <span>Anna</span> Shirinskaya
                </p>
                <p className="about-team__role">developer</p>
              </div>
            </div>
            <div className="about-team__github">
              <a href="https://github.com/avshir" target="_blank" rel="noreferrer">
                avshir
              </a>
            </div>
            <div className="about-team__contribution">
              Разработала UI и дизайн приложения, глобальные стили, главную
              страницу, о команде, header, footer, доработала роутинг по
              страницам
            </div>
          </div>
          <div className="about-team__item">
            <div className="about-team__foto">
              <div className="about-team__card-text">
                <p>
                  <span>Andrey</span> Lappo
                </p>
                <p className="about-team__role">developer</p>
              </div>
            </div>
            <div className="about-team__github">
              <a href="https://github.com/LappoAndrey" target="_blank" rel="noreferrer">
                LappoAndrey
              </a>
            </div>
            <div className="about-team__contribution">
              Настроил получение данных с бэкэнда, разработал игру «Аудиовызов»
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TeamAbout;

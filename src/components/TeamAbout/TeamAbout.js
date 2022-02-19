import React from 'react';
import './TeamAbout.css';
// import RssLogo from './../../assets/svg/rs_school.svg';
// import githubLogo from './../../assets/svg/icons8-github.svg';

function TeamAbout() {
  return (
    <article className="about-team bg-color-5">
      <div className="container main__screen ">
        <h2 className="title-2">О команде разработчиков</h2>
        <div className="about-team__row">
          <div className="about-team__item">
            <div className="about-team__foto">Sergey Rudovich</div>
            <div className="about-team__github">
              <a href="https://github.com/SergRudovich" target="_blank">
                SergRudovich
              </a>
            </div>
            <div className="about-team__contribution">
              Team lead, Далеко-далеко за словесными, горами в стране гласных
            </div>
          </div>
          <div className="about-team__item">
            <div className="about-team__foto">Anna Shirinskaya</div>
            <div className="about-team__github">
              <a href="https://github.com/avshir" target="_blank">
                avshir
              </a>
            </div>
            <div className="about-team__contribution">
              Team lead, Далеко-далеко за словесными, горами в стране гласных
            </div>
          </div>
          <div className="about-team__item">
            <div className="about-team__foto">Andrey Lappo</div>
            <div className="about-team__github">
              <a href="https://github.com/LappoAndrey" target="_blank">
                LappoAndrey
              </a>
            </div>
            <div className="about-team__contribution">
              Team lead, Далеко-далеко за словесными, горами в стране гласных
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TeamAbout;

import React from 'react';
import './Footer.css';
import RssLogo from './../../assets/svg/rs_school.svg';
import githubLogo from './../../assets/svg/icons8-github.svg';

function Footer() {
  return (
    <footer className="footer bg-color-2">
      <div className="container footer__container">
        <div className="footer__column">
          <a
            className="footer__rss-image"
            href="https://rs.school/js/"
            target="_blank"
          >
            <img src={RssLogo} alt="RS logo"></img>
          </a>
          <div className="footer__copyright">&copy; 2022</div>
        </div>
        <div className="footer__rss-team">created by team-50</div>
        <div className="footer__column">
          <ul className="footer__github-team">
            <li className="footer__github-image">
              <img src={githubLogo} alt="github logo"></img>
            </li>
            <li>
              <a href="https://github.com/SergRudovich" target="_blank">
                SergRudovich
              </a>
            </li>
            <li className="decor-circle-dark">
              <a href="https://github.com/avshir" target="_blank">
                avshir
              </a>
            </li>
            <li className="decor-circle-dark">
              <a href="https://github.com/LappoAndrey" target="_blank">
                LappoAndrey
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

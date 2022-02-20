import React from "react";
import "./GameCard.css";
import GameCardImage2 from "./../../../assets/img/audio-dog.jpg";
import GameCardImage1 from "./../../../assets/img/sprint-dog.jpg";

function GameCard(props) {
  const gameCardData = [
    {
      id: 0,
      gameName: "Спринт",
      gameTarget: "Перевод на скорость",
      gameDescription:
        "Определи как можно быстрее: верный перевод слова или нет",
      gameImage: GameCardImage1,
    },
    {
      id: 0,
      gameName: "Аудиовызов",
      gameTarget: "Аудирование",
      gameDescription:
        "Определи как можно быстрее: верный перевод слова или нет",
      gameImage: GameCardImage2,
    },
  ];

  return (
    <div>
      <div className="game-card bg-color-7">
        <div className="game-card__text">
          <div className="game-card__title title-2">{props.gameName}</div>
          <div className="game-card__subtitle bg-color-1">
            {props.gameTarget}
          </div>
          <p>{props.gameDescription}</p>
        </div>
        <div className="game-card__image">
          <img src={props.gameImage} alt="headphone"></img>
        </div>
      </div>
    </div>
  );
}

export default GameCard;

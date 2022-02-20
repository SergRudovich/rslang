/* eslint-disable react-hooks/exhaustive-deps */
import './Statistic.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUserWords } from '../../services/wordsService';
import getStatistic from '../../helpers/getStatistic';

function Statistic() {

  const dispatch = useDispatch();
  const sprintSequence = useSelector(state => state.sprintSequence);
  const userWords = useSelector(state => state.userWords);
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user) dispatch(getUserWords(user.userId, user.token));
  }, []);

  const { learned,
    sprintNew,
    sprintYes,
    sprintNo,
    audiocallNew,
    audiocallYes,
    audiocallNo } = getStatistic(userWords);

  let sprintPersent = Math.round(sprintYes / ((sprintYes + sprintNo) / 100));
  let audiocallPersent = Math.round(audiocallYes / ((audiocallYes + audiocallNo) / 100));
  if (Number.isNaN(sprintPersent)) sprintPersent = 0;
  if (Number.isNaN(audiocallPersent)) audiocallPersent = 0;

  return (
    <div className="main__screen bg-color-6 statistic-wrapper">
      <h1>Статистика</h1>
      {user &&
        <>
          <div>
            <h3>Игра Спринт:</h3>
            <p>Количество новых слов за день: <span>{sprintNew}</span></p>
            <p>Процент правильных ответов: <span>{sprintPersent}%</span></p>
            <p>Самая длинная серия правильных ответов: <span>{sprintSequence}</span></p>
          </div>
          <div>
            <h3>Игра Аудиовызов:</h3>
            <p>Количество новых слов за день: <span>{audiocallNew}</span></p>
            <p>Процент правильных ответов: <span>{audiocallPersent}%</span></p>
            <p>Самая длинная серия правильных ответов: <span>{0}</span></p>
          </div>
          <div>
            <h3>Статистика по словам</h3>
            <p>Количество новых слов за день: <span>{sprintNew + audiocallNew}</span></p>
            <p>Количество изученных слов за день: <span>{learned}</span></p>
            <p>Процент правильных ответов за день: <span>{sprintPersent + audiocallPersent}%</span></p>
          </div>
        </>
      }
      {!user &&
        <>
          <h2>Вы не авторизованы! Статистика не полная.</h2>
          <div>
            <h3>Игра Спринт:</h3>
            <p>Процент правильных ответов: <span>{sprintPersent}%</span></p>
            <p>Самая длинная серия правильных ответов: <span>{sprintSequence}</span></p>
          </div>
          <div>
            <h3>Игра Аудиовызов:</h3>
            <p>Процент правильных ответов: <span>{audiocallPersent}%</span></p>
            <p>Самая длинная серия правильных ответов: <span>{0}</span></p>
          </div>
        </>
      }
    </div >
  );
}

export default Statistic;

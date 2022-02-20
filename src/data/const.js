// export const API_URL = 'https://react-learnwords-example.herokuapp.com';
import soundError from '../assets/audio/error.mp3';
import soundSuccess from '../assets/audio/success.mp3';

export const API_URL = 'https://dreamteam-rs-lang.herokuapp.com';
export const PASSWORD_RANGE = {min: 8, max: 40};
export const USERNAME_RANGE = {min: 5, max: 20};
export const DIFFICULT_CATEGORY = 6;
export const SPRINT_TIMER = 30;
export const MAX_WORD_PAGES = 30;
export const MAX_WORDS_IN_PAGE = 20;
export const MAX_LEVEL = 12;
export const Http = {
  POST: 'POST',
  PUT: 'PUT',
  GET: 'GET',
  DELETE: 'DELETE',
}
export const wordStatus = {
  difficult: 'difficult',
  learned: 'learned',
  normal: 'normal',
}

export const gameName = {
  sprint: 'sprint',
  audiocall: 'audiocall',
}

export const CATEGORY_COLOR = ['#ecc8c9', '#c6a78f', '#a0b3a8', '#f7d8b6', '#ebb2cd', '#dcebb2', '#9999bb'];





export const text = {
  ru: {

    /* Buttons */
    button: {
      next: 'Далее',
      dontKnow: 'Не знаю',
      startGame: 'Играть',
      newGame: 'Начать новую игру',
      check: 'Проверить',
      learnWords: 'Изучать слова',
      learnEnglishWithUs: 'Учите английский с нами',
      startLearningWithUs: 'Начать учиться с нами',
      playRightNow: 'Сыграть прямо сейчас',
    },

    noVideoSupport: 'Извините, ваш браузер не поддерживает встроенное видео',
  },
};


const formLabel = {
  level: 'Уровень',
  chooseLevel: 'Выберите уровень',
  questions: 'Сколько слов хотите отгадать? (5—12)',
  answers: 'Сколько вариантов ответов? (2—5)',
};

const gamesData = {
  audiocall: {
    title: 'Аудиовызов',
    description: 'Прокачивайте восприятие языка на&nbsp;слух, а&nbsp;также увеличивайте свой словарный запас',
    path: 'audiocall',
  }
};



export {
  soundError,
  soundSuccess,
  gamesData,
  formLabel,
};


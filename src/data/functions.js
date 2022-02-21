import {
  API_URL,
  MAX_LEVEL,
} from './const';

const getFilePath = (mediaPath) => `${API_URL}/${mediaPath}`;


const playAudio = (path) => {
  const audioElement = new Audio(path);
  audioElement.play();
};

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const generateQuestionsArray = (
  data,
  amountLevels = MAX_LEVEL,
) => (
  shuffleArray(data).slice(0, amountLevels)
);


export {
  playAudio,
  getFilePath,
  generateQuestionsArray,
  shuffleArray
};

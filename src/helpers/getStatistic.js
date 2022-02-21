import {wordStatus, gameName} from '../data/const';

export default function getStatistic(userWords) {

  let learned = 0;
  let sprintNew = 0;
  let sprintYes = 0;
  let sprintNo = 0;
  let audiocallNew = 0;
  let audiocallYes = 0;
  let audiocallNo = 0;

  userWords.forEach(word => {
    if (word.difficulty === wordStatus.learned) learned += 1;
    if (word.optional[gameName.sprint].new === 'new') sprintNew += 1;
    sprintYes += word.optional[gameName.sprint].yes;
    sprintNo += word.optional[gameName.sprint].no;
    if (word.optional[gameName.audiocall].new === 'new') audiocallNew += 1;
    audiocallYes += word.optional[gameName.audiocall].yes;
    audiocallNo += word.optional[gameName.audiocall].no;
  });

  console.log(userWords.length);

  return {
    learned,
    sprintNew,
    sprintYes,
    sprintNo,
    audiocallNew,
    audiocallYes,
    audiocallNo
  }
}
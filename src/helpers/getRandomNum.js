import { MAX_WORD_PAGES } from '../data/const';

export default function getRandomNum(from = 0, to = MAX_WORD_PAGES - 1) {
  return Math.floor(Math.random() * (to + 1 - from)) + from;
}
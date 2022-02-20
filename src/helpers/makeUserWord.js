export default function makeUserWord(word, userWord) {
  if ('difficulty' in word) userWord.difficulty = word.difficulty;
  if ('game' in word) {
    userWord.optional[word.game].yes += (word.yes) ? word.yes : 0;
    userWord.optional[word.game].no += (word.no) ? word.no : 0;
    userWord.optional[word.game].new === ''
      ? (userWord.optional[word.game].new = 'new')
      : (userWord.optional[word.game].new = 'old');
  }
  return userWord;
}
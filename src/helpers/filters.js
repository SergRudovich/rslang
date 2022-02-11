export default function getFilter(difficulty) {
  const filter = {
    $and: [{ "userWord.difficulty": difficulty }]
  }
  return filter
}
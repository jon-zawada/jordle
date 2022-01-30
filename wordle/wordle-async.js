const fs = require('fs');
const path = require('path');
const WORDLE_ALLOWED_WORDS = path.join(__dirname, 'wordle-answers-alphabetical.txt');

const generateWord = () => {
  const words = fs.readFileSync(WORDLE_ALLOWED_WORDS, { encoding: 'utf8', flag: 'r' });
  console.log(words.split('\n'));
};

generateWord();

module.exports = { generateWord };

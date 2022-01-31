const fs = require('fs');
const path = require('path');

const WORDLE_ALLOWED_WORDS = path.join(__dirname, 'wordle-answers-alphabetical.txt');
const WORDLE_ALLOWED_GUESSES = path.join(__dirname, 'wordle-allowed-guesses.txt');

const generateDictionary = () => {
  const words = fs.readFileSync(WORDLE_ALLOWED_WORDS, { encoding: 'utf8', flag: 'r' });
  const wordsArray = words.split('\n');
  const data = {};
  for (let i = 0; i < wordsArray.length; i++) {
    data[wordsArray[i]] = i;
  }
  return data;
};

const generateGuessDictionary = () => {
  const words = fs.readFileSync(WORDLE_ALLOWED_GUESSES, { encoding: 'utf8', flag: 'r' });
  const wordsArray = words.split('\n');
  const data = {};
  for (let i = 0; i < wordsArray.length; i++) {
    data[wordsArray[i]] = i;
  }
  return data;
};

module.exports = { generateDictionary, generateGuessDictionary };

const express = require('express');
const fs = require('fs');
const path = require('path');
const { randomIntFromInterval } = require('../wordle/wordle');
const { generateDictionary, generateGuessDictionary } = require('../wordle/wordle-async');

const dictionary = generateDictionary();
const guessDictionary = generateGuessDictionary();
const DIST_DIR = path.join(__dirname, '..', 'app', 'dist');
const WORDLE_ALLOWED_WORDS = path.join(__dirname, '..', 'wordle', 'wordle-answers-alphabetical.txt');
const WORDLE_ALLOWED_GUESSES = path.join(__dirname, '..', 'wordle', 'wordle-allowed-guesses.txt');

const app = express();
const PORT = 3000;

app.use(express.static(DIST_DIR));

app.get('/answers', (req, res) => {
  const words = fs.readFileSync(WORDLE_ALLOWED_WORDS, { encoding: 'utf8', flag: 'r' });
  res.send(words.split('\n'));
});

app.get('/answers/random', (req, res) => {
  const words = fs.readFileSync(WORDLE_ALLOWED_WORDS, { encoding: 'utf8', flag: 'r' });
  const validWords = words.split('\n');
  const validCount = validWords.length;
  const randomIndex = randomIntFromInterval(0, validCount - 1);
  const randomWord = validWords[randomIndex];
  res.send(randomWord);
});

app.get('/guesses', (req, res) => {
  const words = fs.readFileSync(WORDLE_ALLOWED_GUESSES, { encoding: 'utf8', flag: 'r' });
  res.send(words.split('\n'));
});

app.get('/guesses/valid/:guess', (req, res) => {
  const { guess } = req.params;
  if (dictionary[guess] || guessDictionary[guess]) {
    res.send('true');
  } else {
    res.send('false');
  }
});

app.listen(PORT, () => {
  console.log(`Jordle listening on PORT ${PORT}`);
});

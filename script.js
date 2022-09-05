'use strict';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

const showMessage = (msg) => {
  message.textContent = msg;
};

const handleWinLoose = (background) => {
  displaySecretNumber.textContent = secretNumber;
  secretNumberBox.style.width = '10rem';
  body.style.backgroundColor = background;
};

const check = document.querySelector('#check-btn');
const input = document.querySelector('#input');
const message = document.querySelector('#message');
const displayScore = document.querySelector('#score');
const displayHighestScore = document.querySelector('#highest-score');
const displaySecretNumber = document.querySelector('#secret-number');
const playAgain = document.querySelector('#again-btn');
const secretNumberBox = document.querySelector('.secret');
const body = document.querySelector('body');
const about = document.querySelector('#about-btn');
const displayAbout = document.querySelector('.about');
const winBg = '#60B45A';
const loseBg = '#AF2413';
let secretNumber = generateRandomNumber();
let score = 20;
let highestScore = 0;
let isAboutOpen = false;

check.addEventListener('click', () => {
  if (!Number(input.value) || Number(input.value) < 0) {
    showMessage('❌ Not a valid number');
    return;
  }
  if (score <= 1) {
    displayScore.textContent = 0;
    handleWinLoose(loseBg);
    showMessage('❌ You lose!');
    return;
  }
  if (Number(input.value) === secretNumber) {
    showMessage('🎉 You win!!!');
    handleWinLoose(winBg);
    if (score > highestScore) displayHighestScore.textContent = score;
    return;
  } else {
    if (Number(input.value) > secretNumber) {
      showMessage('👆 Too high!');
      score--;
      displayScore.textContent = score;
    } else {
      showMessage('👆 Too low!');
      score--;
      displayScore.textContent = score;
    }
  }
});

playAgain.addEventListener('click', () => {
  input.value = 0;
  showMessage('❓ Start guessing...');
  secretNumber = generateRandomNumber();
  score = 20;
  displayScore.textContent = score;
  displaySecretNumber.textContent = '?';
  secretNumberBox.style.width = '8rem';
  body.style.backgroundColor = 'black';
});

about.addEventListener('click', () => {
  isAboutOpen = !isAboutOpen;
  displayAbout.textContent = isAboutOpen
    ? "Guess the Number by Brayan Miza. The classic Guess The Number game, is a small project created to practice vanilla Javascript, CSS and HTML. This project is based on Jonas Schmedtmann's The Complete JavaScript Course 2022: From Zero to Expert! course with a few features added"
    : '';
});

'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random number from 1 - 6 (dice roll)
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    // Reset Current Score
    currentScore *= 0;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
    // Switch to Player 2
    if (currentPlayer == 0) {
      currentPlayer = 1;
      player1El.classList.toggle('player--active');
      player0El.classList.toggle('player--active');
    } else {
      currentPlayer = 0;
      player1El.classList.toggle('player--active');
      player0El.classList.toggle('player--active');
    }
    document.getElementById(`current--${currentPlayer}`).textcontent =
      currentScore;
  }
});

btnHold.addEventListener('click', function () {
  scores[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    scores[currentPlayer];
  currentScore *= 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
  if (scores[currentPlayer] >= 100) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.toggle('player--winner');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
    diceEl.classList.add('hidden');
  }
  if (currentPlayer == 0) {
    currentPlayer = 1;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
  } else {
    currentPlayer = 0;
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
  }
});

btnNew.addEventListener('click', function () {
  document.location.reload();
});

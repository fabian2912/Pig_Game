'use strict';

// Selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // not writing a selector, just passing in name of the ID
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


// rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6)  + 1// gives number between 0 and 5, add 1 for 6

    // 2. display dice
    diceEl.src = `dice-${dice}.png`; // dynamically load one of the 6 images depending on the randomly rolled dice
    diceEl.classList.remove('hidden');

    // 3. check for rolled 1
    if(dice !== 1) {
        // add dice to current score
        currentScore += dice; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // dice == 1 so switch to next player
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0; // reassigning the active player, and checking whether it's player 0
        player0El.classList.toggle("player--active");     
        player1El.classList.toggle("player--active");           
    }
})
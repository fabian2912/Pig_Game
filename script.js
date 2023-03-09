'use strict';

// Selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // not writing a selector, just passing in name of the ID
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


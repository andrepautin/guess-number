"use strict";

const guessedInput = document.getElementById("guess");
const guessForm = document.getElementById("guess-form");
const submitBtn = document.getElementById("submit-guess");
const playAgainBtn = document.getElementById("play-again-btn");
const playAgainForm = document.getElementById("play-again-form");

let magicNum;
let guessedNum;
let numGuesses = 0;
let message;
let wonGame = false;

/**
 * Function generateMagicNum
 * 
 * creates a random number between 1-100
 */

function generateMagicNum() {
  playAgainBtn.style.visibility = "hidden";
  guessForm.addEventListener("submit", getGuess);
  playAgainForm.addEventListener("submit", playAgain);
  magicNum = Math.floor(Math.random() * 100);
}

/**
 * Function getGuess
 * 
 * gets the guessed num from user input
 */

function getGuess(evt) {
  evt.preventDefault();
  guessedNum = Number(guessedInput.value);
  guessedInput.value = "";
  numGuesses += 1;
  checkGuess();
}

/**
 * Function checkGuess
 * 
 * checks guessedNum against magicNum and lets user know if magicNum is higher or lower
 */

function checkGuess() {
  if (guessedNum < 1 || guessedNum > 100) {
    message = "Invalid. Please enter a number from 1-100";
  } else if (guessedNum === magicNum) {
    message = `You found the magic number in ${numGuesses} tries!`;
    wonGame = true;
  } else if (guessedNum > magicNum) {
    message = "Too high! Try again!";
  } else {
    message = "Too low! Try again!";
  }
  if (wonGame) {
    resetGame();
  } 
  displayMessage(message);
}

/**
 * Function displayMessage
 * 
 * displays the correct message based on user input
 */

function displayMessage(msg) {
  let messageArea = document.getElementById("message-area");
  messageArea.innerHTML = "";
  messageArea.append(msg);
}

/**
 * Function resetGame
 * 
 * resets the game with a new magic number
 */

function resetGame() {
  guessedInput.style.visibility = "hidden";
  submitBtn.style.visibility = "hidden";
  playAgainBtn.style.visibility = "visible";
}

/**
 * Function playAgain
 * 
 * reloads page with new magic number for user to guess again
 */

function playAgain() {
  window.location.reload();
}

generateMagicNum();
console.log(magicNum);
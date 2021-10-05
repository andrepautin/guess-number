"use strict";

let magicNum;
let numGuesses = 0;
let guessedNum;
let message;
let wonGame = false;

/**
 * Function generateMagicNum
 * 
 * creates a random number between 1-100
 */

function generateMagicNum() {
  magicNum = Math.floor(Math.random() * 100);
}

/**
 * Function getGuess
 * 
 * gets the guessed num from user input
 */

function getGuess() {
  guessedNum = Number(document.getElementById("guess").value);
  document.getElementById("guess").value = "";
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
  // hide input and submit button
  // show a play again button
    // play again button will reload page for user to play again
}

generateMagicNum();
console.log(magicNum);
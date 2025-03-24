'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number..🎊';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 18;

// document.querySelector('.guess').value = 50;
// console.log(document.querySelector('.guess').value);

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No guess..⛔';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number..🎊';

    //when the guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high..📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game..🤯';
    }

    //when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low..📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game..🤯';
    }
  }
});

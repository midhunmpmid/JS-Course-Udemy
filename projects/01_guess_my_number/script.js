'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number..🎊';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 18;

// document.querySelector('.guess').value = 50;
// console.log(document.querySelector('.guess').value);

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No guess..⛔';
    displayMessage('No guess..⛔');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number..🎊';
    displayMessage('Correct Number..🎊');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high..📉' : 'Too low..📈';
      displayMessage(guess > secretNumber ? 'Too high..📉' : 'Too low..📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game..🤯';
      displayMessage('You lost the game..🤯');
    }

    //code refactored - below code was removed
    //when the guess is too low
  }
  // else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too low..📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game..🤯';
  //   }
  // }
});

//play again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = 0;
});

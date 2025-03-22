'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number..🎊';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 18;

document.querySelector('.guess').value = 50;
console.log(document.querySelector('.guess').value);

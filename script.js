'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.score').textContent);
document.querySelector('.highscore').textContent = 8;
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector('.score').textContent = score;
let highscore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessedNumber = Number(document.querySelector('.guess').value);

    //when no number input
    if (!guessedNumber) {
        displayMessage('⛔ No Number!');

        //when player wins
    } else if (secertNumber === guessedNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = 'rgb(30, 245, 10)';
        document.querySelector('.number').textContent = secertNumber;
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is wrong
    } else if (secertNumber !== guessedNumber) {
        if (score > 1) {
            secertNumber > guessedNumber ? displayMessage('📉 Try A Little Higher!') : displayMessage('📈 Try A Little Lower!');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('👎 You lost the game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'rgb(245, 104, 65)';
            document.querySelector('.number').textContent = `${secertNumber}😥`;
        }

    }

    //refactoring of code

    //when the guess is too high
    // } else if (secertNumber > guessedNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Try A Little Higher!';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     } else {
    //         document.querySelector('.message').textContent = '👎 You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'rgb(245, 104, 65)';
    //         document.querySelector('.number').textContent = `${secertNumber}🤨`;
    //     }

    //when the guess is too low
    // } else if (secertNumber < guessedNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Try A Little Lower!';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     } else {
    //         document.querySelector('.message').textContent = '👎 You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'rgb(245, 104, 65)';
    //         document.querySelector('.number').textContent = `${secertNumber}🤨`;
    //     }
    // }

})

//Restart the game
document.querySelector('.again').addEventListener('click', function () {

    // location.reload();

    secertNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.background = '#e0e0ac';
    score = 10;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})
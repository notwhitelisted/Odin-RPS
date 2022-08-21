let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'TIE'
    }
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        playerScore++;
        roundWinner = 'YOU WIN';
    } 
    if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || (computerSelection === 'PAPER' && computerSelection === 'ROCK') || (computerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        computerScore++;
        roundWinner = 'YOU LOST';
    }
}

function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    if (number === 1) {
        return 'ROCK';
    } else if (number === 2) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function isGameOver() {
    return playerScore === 5 | computerScore === 5
}

const playerSelection = 'ROCK';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

console.log("player choice: " + playerSelection);
console.log("computer choice: " + computerSelection);
console.log(isGameOver());

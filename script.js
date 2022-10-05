let playerScore = 0;
let computerScore = 0;
let playerPicks = 0;
let computerPicks = 0;

const restart = document.getElementById('4');
restart.removeEventListener('click', playerChoice);
restart.addEventListener('click', () => { window.location.reload(); })

const endResults = document.querySelector(".endResults");
const roundResults = document.querySelector(".roundResults")

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {button.addEventListener('click', playerChoice)})

const player = document.querySelector('.playerPoints');
player.textContent = `Player's score: ${playerScore}`;

const computer = document.querySelector('.computerPoints');
computer.textContent = `Computer's score: ${computerScore}`;

//Picks a random number from 1-3
function computerChoice() {
    let computerPicks = Math.floor(Math.random() * 3);
    if (computerPicks === 1) {
        return 'rock';
    } else if (computerPicks === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound('rock', computerChoice());
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound('paper', computerChoice());
})
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound('scissors', computerChoice());
})

function playerChoice(e) {
    playerPicks = (e.target.id);
    if (playerPicks == 1) {
        playerSelection = 'rock'
    } else if (playerPicks == 2) {
        playerSelection = 'paper' 
    } else {
        playerSelection = 'scissors'
    }
    playRound(playerChoice(), computerChoice())
}

//Compares both inputs and updates the score
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResults.textContent = 'TIE';
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `AI's score: ${computerScore}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        roundResults.textContent = 'DUB';
        playerScore++;
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `AI's score: ${computerScore}`;
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')) {
        roundResults.textContent = 'L';
        computerScore++;
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `AI's score: ${computerScore}`;
    }
    isGameOver()
}

//Results 
function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            endResults.textContent =  'GAME OVER. YOU WIN';
            buttons.forEach((button) => { button.removeEventListener('click', playerChoice)});
        } else if (computerScore > playerScore) {
            endResults.textContent = 'GAME OVER. YOU LOSE'
            buttons.forEach((button) => { button.removeEventListener('click', playerChoice)});
        } else {
            endResults.textContent = 'TIE. GO AGAIN'
            buttons.forEach((button) => { button.removeEventListener('click', playerChoice)});
        }
    }
    isGameOver();
}


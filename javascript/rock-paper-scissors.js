
// Computer Program

function computerPlayer() {

    // Computer's choices
    let computer1stChoice = "Rock";
    let computer2ndChoice = "Paper";
    let computer3rdChoice = "Scissor";

    // Randomly generate a number between 0 - 2
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
  
    let randomChoice = getRandomInt(3);
    // expected output: 0, 1 or 2

    // When the number is 0: return Rock
    if (randomChoice == 0) {
        return computer1stChoice;
    }

    // When the number is 1: return Paper
    else if (randomChoice == 1) {
        return computer2ndChoice;
    }

    // When the number is 2: return Scissor
    else if (randomChoice == 2) {
        return computer3rdChoice;
    }
}

// Scores
let computerScore = 0;
let playerScore = 0;

//Game variables
const endGameBox = document.querySelector('.box');
const endGameWinner = document.querySelector('.box-title');

const restartBtn = document.querySelector('.btn-restart');

let gameTitle = document.querySelector('.game-title');
let paragraph = document.querySelector('.paragraph');

let playerScoreBoard = document.querySelector('.player-report');
let playerChoiceBoard = playerScoreBoard.firstElementChild;

let computerScoreBoard = document.querySelector('.computer-report');
let computerChoiceBoard = computerScoreBoard.firstElementChild;

const playerScoreNumber = document.querySelector('.player');
const computerScoreNumber = document.querySelector('.computer'); 

// Player choices
const choices = Array.from(document.querySelectorAll('.choice'));
choices.forEach(choice => choice.addEventListener('click', function(e){
    const element = e.target;
    const attribute = element.getAttribute('id');
    if (!attribute || playerScore == 5 || computerScore == 5) return;
    const playerSelection = attribute;
    const computerSelection = computerPlayer();

    // Winner of the round
    let roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner == 'player') {
        playerScore++;
        playerScoreNumber.textContent = `Player: ${playerScore}`;
    }
    else if (roundWinner == 'computer') {
        computerScore++;
        computerScoreNumber.textContent = `Computer: ${computerScore}`;
    }

    // count each round for 5 rounds total and end the game

    if (playerScore == 5) {
        endGameWinner.textContent = 'You won';
        endGameBox.classList.add('active');
        //overlay.classList.add('active')
        
    }

    else if (computerScore == 5) {
        endGameWinner.textContent = 'You lost';
        endGameBox.classList.add('active');
        //overlay.classList.add('active')
    }
}));

// Restart
const playAgain = document.querySelector('.btn-restart');
playAgain.addEventListener('click', restart);

// Reset the game
function restart() {
    playerScore = 0;
    computerScore = 0;

    gameTitle.textContent = 'Choose your weapon';
    paragraph.textContent = 'First to score 5 points wins the game';

    playerChoiceBoard.classList.remove('player-choice');
    computerChoiceBoard.classList.remove('player-choice');

    playerScoreNumber.textContent = `Player: ${playerScore}`
    computerScoreNumber.textContent = `Computer: ${computerScore}`
    endGameBox.classList.remove('active');
}

// Playround program
function playRound (player, computer) {

    // Game players' choices
    let computerChoice = computer;
    let playerChoice = player;

    // Round declarations

    let playerWinner = 'player';
    let computerWinner = 'computer';
    let roundTie = 'tie';

    // Compare the computer's choice against the player's choice

    // When the computer's choice is rock
    if (computerChoice.toLowerCase() === 'rock') {
        // When the player's choice is rock: return tie
        if (playerChoice.toLowerCase() === 'rock') {
            gameTitle.textContent = 'Tie!';
            paragraph.textContent = 'Rock ties against rock';

            playerChoiceBoard.setAttribute('class', 'player-choice first');
            computerChoiceBoard.setAttribute('class', 'player-choice first');

            return roundTie;
        }
        // When the player's choice is paper: return player won
        else if (playerChoice.toLowerCase() === 'paper') {
            gameTitle.textContent = 'You won!';
            paragraph.textContent = 'Paper beats rock';

            playerChoiceBoard.setAttribute('class', 'player-choice third');
            computerChoiceBoard.setAttribute('class', 'player-choice first');

            return playerWinner;
        }
        // When the player's choice is scissor: return computer won
        else if (playerChoice.toLowerCase() === 'scissor') {
            gameTitle.textContent = 'Computer won!';
            paragraph.textContent = 'Rock beats scissor';

            playerChoiceBoard.setAttribute('class', 'player-choice second');
            computerChoiceBoard.setAttribute('class', 'player-choice first');

            return computerWinner;
        }
    }

    // When the computer's choice is paper
    else if (computerChoice.toLowerCase() === 'paper') {
        // When the player's choice is rock: return computer won 
        if (playerChoice.toLowerCase() === 'rock') {
            gameTitle.textContent = 'Computer won!';
            paragraph.textContent = 'Paper beats rock'

            playerChoiceBoard.setAttribute('class', 'player-choice first');
            computerChoiceBoard.setAttribute('class', 'player-choice third');

            return computerWinner;
        }
        // When the player's choice is paper: return tie
        else if (playerChoice.toLowerCase() === 'paper') {
            gameTitle.textContent = 'Tie!';
            paragraph.textContent = 'Paper ties against paper'

            playerChoiceBoard.setAttribute('class', 'player-choice third');
            computerChoiceBoard.setAttribute('class', 'player-choice third');

            return roundTie;
        }
        // When the player's choice is scissor: return player won
        else if (playerChoice.toLowerCase() === 'scissor') {
            gameTitle.textContent = 'You won!';
            paragraph.textContent = 'scissor beats paper'

            playerChoiceBoard.setAttribute('class', 'player-choice second');
            computerChoiceBoard.setAttribute('class', 'player-choice third');

            return playerWinner;
        }
    }

    // When the computer's choice is scissor
    else if (computerChoice.toLowerCase() === 'scissor') {
        // When the player's choice is rock: return player won
        if (playerChoice.toLowerCase() === 'rock') {
            gameTitle.textContent = 'You won!';
            paragraph.textContent = 'Rock beats scissor'

            playerChoiceBoard.setAttribute('class', 'player-choice first');
            computerChoiceBoard.setAttribute('class', 'player-choice second');

            return playerWinner;
        }
        // When the player's choice is paper: return computer won
        else if (playerChoice.toLowerCase() === 'paper') {
            gameTitle.textContent = 'Computer won!';
            paragraph.textContent = 'scissor beats paper'

            playerChoiceBoard.setAttribute('class', 'player-choice third');
            computerChoiceBoard.setAttribute('class', 'player-choice second');

            return computerWinner;
        }

        // When the player's choice is scissor: return tie
        else if (playerChoice.toLowerCase() === 'scissor') {
            gameTitle.textContent = 'Tie!';
            paragraph.textContent = 'Scissor ties against scissor'

            playerChoiceBoard.setAttribute('class', 'player-choice second');
            computerChoiceBoard.setAttribute('class', 'player-choice second');

            return roundTie;
        }
    }
}
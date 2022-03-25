
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

// PlayerSelection Program

function playerSelection() {

    // Get player's choice
    let userChoice = window.prompt("Your choice?: ");
    return userChoice;
}

// Playround program

function playRound () {

    // Game players' choices
    let computerChoice = computerPlayer();
    let playerChoice = playerSelection();

    // Round declaration
    let roundTie = 'tie';
    let computerWinner = 'computer won';
    let playerWinner = 'player won';

    // Compare the computer's choice against the player's choice

    // When the computer's choice is rock
    if (computerChoice.toLowerCase() === 'rock') {
        // When the player's choice is rock: return tie
        if (playerChoice.toLowerCase() === 'rock') {
            return roundTie;
        }
        // When the player's choice is paper: return player won
        else if (playerChoice.toLowerCase() === 'paper') {
            return playerWinner;
        }
        // When the player's choice is scissor: return computer won
        else if (playerChoice.toLowerCase() === 'scissor') {
            return computerWinner;
        }
    }

    // When the computer's choice is paper
    else if (computerChoice.toLowerCase() === 'paper') {
        // When the player's choice is rock: return computer won 
        if (playerChoice.toLowerCase() === 'rock') {
            return computerWinner;
        }
        // When the player's choice is paper: return tie
        else if (playerChoice.toLowerCase() === 'paper') {
            return roundTie;
        }
        // When the player's choice is scissor: return player won
        else if (playerChoice.toLowerCase() === 'scissor') {
            return playerWinner;
        }
    }

    // When the computer's choice is scissor
    else if (computerChoice.toLowerCase() === 'scissor') {
        // When the player's choice is rock: return player won
        if (playerChoice.toLowerCase() === 'rock') {
            return playerWinner;
        }
        // When the player's choice is paper: return computer won
        else if (playerChoice.toLowerCase() === 'paper') {
            return computerWinner;
        }
        // When the player's choice is scissor: return tie
        else if (playerChoice.toLowerCase() === 'scissor') {
            return roundTie;
        }
    }
}

console.log(playRound())
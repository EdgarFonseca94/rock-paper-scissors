function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];

    let random = Math.floor(Math.random() * choice.length);
    return (choice[random])
}
function resetGame() {
    computerScore = 0;
    playerScore = 0;

    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = playerScore;
}
function checkWinner() {
    if(computerScore > playerScore) {
        gameWinner.textContent = "Score of 5 reached computer wins!";
    } else {
        gameWinner.textContent = "Score of 5 reached player wins!";
    }
}
function updateScore(gameWinner) {
    if(gameWinner === "computer") {
        computerScore++;
        computerScoreText.textContent = computerScore;
    } else if (gameWinner === "player") {
        playerScore++;
        playerScoreText.textContent = playerScore;
    }
    
    // if score gets above 5 check winner/reset game
    if (playerScore == 5 || computerScore == 5) {
        checkWinner();
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection ==="paper") {
        updateScore("computer");
        return("You Lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection ==="scissors"){
        updateScore("player");
        return("You Win! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection ==="rock") {
        updateScore("player");
        return("You Win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection ==="scissors") {
        updateScore("computer");
        return("You Lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection ==="paper") {
        updateScore("player");
        return("You Win! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection ==="rock") {
        updateScore("computer");
        return("You Lose! Rock beats Scissors");
    } else {
        return("Tie!");
    }
}

// initialize scores
let computerScore = 0;
let playerScore = 0;

// get score text
let computerScoreText = document.getElementById('computer-score');
let playerScoreText = document.getElementById('player-score');

// computer selection text
let computerSelection;
let computerSelectionText = document.getElementById('computer-choice');

// display result/ winner of
let resultGame = document.getElementById('result');
let gameWinner = document.getElementById('game-winner');

// display beginning score on page
computerScoreText.textContent = computerScore;
playerScoreText.textContent = playerScore;


// selector for buttons
rockBTN = document.querySelector('#rock-btn');
paperBTN = document.querySelector('#paper-btn');
scissorsBTN = document.querySelector('#scissors-btn');

// adds eventlistener to each button
rockBTN.addEventListener('click', (e) => {
    if(computerScore == 5 || playerScore == 5){
        resetGame();
    } else {
        computerSelection = getComputerChoice();
        computerSelectionText.textContent = computerSelection;
        resultGame.textContent = playRound(e.path[1].value, computerSelection);
    }
});
paperBTN.addEventListener('click', (e) => {
    if(computerScore == 5 || playerScore == 5){
        resetGame();
    } else {
        computerSelection = getComputerChoice();
        computerSelectionText.textContent = computerSelection;
        resultGame.textContent = playRound(e.path[1].value, computerSelection);
    }
});
scissorsBTN.addEventListener('click', (e) => {
    if(computerScore == 5 || playerScore == 5){
        resetGame();
    } else {
        computerSelection = getComputerChoice();
        computerSelectionText.textContent = computerSelection;
        resultGame.textContent = playRound(e.path[1].value, computerSelection);
    }
});

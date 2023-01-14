function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];

    let random = Math.floor(Math.random() * choice.length);
    return (choice[random])
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection ==="paper") {
        computerScore++;
        return("You Lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection ==="scissors"){
        playerScore++;
        return("You Win! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection ==="rock") {
        playerScore++;
        return("You Win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection ==="scissors") {
        computerScore++;
        return("You Lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection ==="paper") {
        playerScore++;
        return("You Win! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection ==="rock") {
        computerScore++;
        return("You Lose! Rock beats Scissors");
    } else {
        return("Draw!");
    }
}
// initialize scores
let computerScore = 0;
let playerScore = 0;

// get score text
let computerScoreText = document.getElementById('computer-score');
let playerScoreText = document.getElementById('player-score');

// display beginning score on page
computerScoreText.innerHTML = computerScore;
playerScoreText.innerHTML = playerScore;


// get nodelist of buttons
let buttons = document.querySelectorAll('button');

// adds eventlistener to each button
buttons.forEach((button) => {
    
    // add 'click' to each button
    button.addEventListener('click', function() {
        let computerChoice = getComputerChoice();
        let computerChoiceText = document.getElementById('computer-choice');
        computerChoiceText.innerHTML = computerChoice;

        // call playRound with player choice and computer choice
        playRound(button.id, computerChoice);
        
        // display new score
        computerScoreText.innerHTML = computerScore;
        playerScoreText.innerHTML = playerScore;
    });
});

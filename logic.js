let playerScore = 0;
let computerScore = 0;
let gameSheet = [];
var btn = document.getElementById("startGame");

/* 
Function to Get Computer Choice between "Rock", "Paper" and "Scissors"
- will return a string between (rock, paper, scissors) randomly and in lowerCase
*/

function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"];
    const randIndex =  Math.floor(Math.random() * options.length);
    const randChoice = options[randIndex];
    return randChoice
}

/* 
Function to play a round of "Rock, Paper, Scissors" between user and computer
- will prompt the user for a choice between : (rock, paper, scissors) and is case-insensitive
- will increment playerScore/computerScore depending on the winner and return a string with round details
*/

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    gameSheet.push(`Player Choice : ${playerSelection} | ${computerSelection} : Computer Choice`);
    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return ("You win! Rock beats Scissors");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        return ("You lose! Paper beats Rock");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return ("You win! Scissors cut Paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        return ("You lose! Rock beats Scissors");
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        return("You Win! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return("You lose! Scissors cut paper");
    }else {
        return("Play Again! It's a tie.");
    }
    
}

/* 
Function to play a game of "Rock, Paper and Scissors" where 5 rounds are played
- will prompt the user for a choice between : (rock, paper, scissors) and is case-insensitive subsequently until 5 rounds are completed
- will increment gameCount to track number of rounds played to reach a combined score of 5
*/


function game(){
    let gameCount = 0;
    while(playerScore + computerScore != 5){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        gameCount += 1;
    }
    let playerScoreShow = playerScore;
    let computerScoreShow = computerScore;
    reset();
    alert(`Player Score : ${playerScoreShow} | Computer Score : ${computerScoreShow}`);
    console.log(gameSheet);
    return("Player Score : " + playerScoreShow + " | Computer Score : " + computerScoreShow);
}

/* 
Function to reset scores and gameSheet which contains round details
*/


function reset(){
    computerScore = 0;
    playerScore = 0;
    gameSheet = [];
}

btn.addEventListener("click", game);

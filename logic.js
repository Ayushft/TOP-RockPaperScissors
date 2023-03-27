let playerScore = 0;
let computerScore = 0;
let gameSheet = [];
var btn = document.getElementById("startGame");

function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"];
    const randIndex =  Math.floor(Math.random() * options.length);
    const randChoice = options[randIndex];
    return randChoice
}

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

function game(){
    let gameCount = 0;
    while(playerScore + computerScore != 5){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        gameCount += 1;
    }
    alert(`Player Score : ${playerScore} | Computer Score : ${computerScore}`);
    console.log(gameSheet);
    return("Player Score : " + playerScore + " | Computer Score : " + computerScore);
}

btn.addEventListener("click", game);

//global score variables
let humanScore = 0;
let computerScore = 0;

//this is a function to get computer randomly choose one choice
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    return randomNumber;
}
/* console.log(getComputerChoice()); */

//this is a function to get a human choice with a prompt.
function getHumanChoice(){
    let humanChoice = prompt("Choose wisely : Rock, Paper, Scissors...");
    //to make it more accurate to determine winner we are going to make it case-insensitive
    return humanChoice.toLowerCase();
}
/* console.log(getHumanChoice()); */

//game will be played round by round. So we take the players choices as arguments , play a round , increment the round winner's score and logs the winner announcement.
function playRound (humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("It's a draw! Nobody wins.")
    }else if (humanChoice == "rock" && computerChoice=="paper"){
        console.log("You Lost! Paper beats Rock.")
        computerScore++;
    }else if (humanChoice== "rock" && computerChoice=="scissors"){
        console.log("You Win! Rock beats Scissors.")
        humanScore++;
    }else if (humanChoice=="paper" && computerChoice =="rock"){
        console.log("You Win! Paper beats Rock.")
        humanScore++;
    }else if (humanChoice=="paper" && computerChoice=="scissors"){
        console.log("You Lost! Scissors beats Paper.")
        computerScore++
    }else if (humanChoice=="scissors" && computerChoice=="rock"){
        console.log("You Lost! Rock beats Scissors.")
        computerScore++;
    }else if (humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You Win! Scissors beats Paper.")
        humanScore++;
    }else{
        console.log("You Choose Poorly! Try Again...")
        prompt("You Choose Poorly! Try Again...")
        playRound();
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);


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

function getHumanChoice(){
    let humanChoice = prompt("Choose wisely : Rock, Paper, Scissors...");
    return humanChoice.toLowerCase();
}

/* console.log(getHumanChoice()); */
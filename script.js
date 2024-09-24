document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("play");
  button.addEventListener("click", function () {
    let humanScore = 0;
    let computerScore = 0;

    function getHumanChoice() {
      let humanChoice = prompt(
        "Choose wisely : Rock, Paper, Scissors..."
      ).toLowerCase();
      return humanChoice;
    }

    function getComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      let computerChoice = choices[Math.floor(Math.random() * choices.length)];
      return computerChoice;
    }

    function playGame() {
      function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
          console.log(
            `Draw!\nhuman : ${humanScore}, computer : ${computerScore}`
          );
        } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
        ) {
          humanScore++;
          console.log(
            `${humanChoice} beats ${computerChoice}, human wins the round\nhuman : ${humanScore}, computer : ${computerScore}`
          );
        } else {
          computerScore++;
          console.log(
            `${computerChoice} beats ${humanChoice}, computer wins the round\nhuman : ${humanScore}, computer : ${computerScore}`
          );
        }
      }

      for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
      }
      gameResult();
    }

    function gameResult() {
      if (humanScore > computerScore) {
        console.log(
          `Your score : ${humanScore}\nComputer score : ${computerScore}. You Won!!`
        );
        alert(
          `Your score : ${humanScore}\nComputer score : ${computerScore}. You Won!!`
        );
      } else if (computerScore > humanScore) {
        console.log(
          `Computer score : ${computerScore}\nYour score : ${humanScore}. You Lost!!`
        );
        alert(
          `Computer score : ${computerScore}\nYour score : ${humanScore}. You Lost!!`
        );
      } else {
        console.log(
          `Computer score : ${computerScore}\nYour score : ${humanScore}. IT'S DRAWW!!`
        );
        alert(
          `Computer score : ${computerScore}\nYour score : ${humanScore}. IT'S DRAWW!!`
        );
      }
    }

    playGame();
  });
});

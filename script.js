function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "ROCK";
  } else if (num === 1) {
    return "PAPER"
  } else {
    return "SCISSORS"
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's A Tie.");
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    alert("You Won.");
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    alert("Computer Won.")
  }
}

let computerScore = 0;
let playerScore = 0;

function playerScorePerRound(playerScore, playerSelection, computerSelection) {
  if (
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
      ++playerScore
    }
  return playerScore;
}

function computerScorePerRound(computerScore, playerSelection, computerSelection) {
  if (
      (playerSelection === "ROCK" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
      ++computerScore
  }
  return computerScore;
}

function totalResult() {
  let totalScoreC = computerScorePerRound(computerScore, playerSelection1, computerSelection1) +
                    computerScorePerRound(computerScore, playerSelection2, computerSelection2) +
                    computerScorePerRound(computerScore, playerSelection3, computerSelection3) +
                    computerScorePerRound(computerScore, playerSelection4, computerSelection4) +
                    computerScorePerRound(computerScore, playerSelection5, computerSelection5);

  let totalScoreP = playerScorePerRound(playerScore, playerSelection1, computerSelection1) +
                    playerScorePerRound(playerScore, playerSelection2, computerSelection2) +
                    playerScorePerRound(playerScore, playerSelection3, computerSelection3) +
                    playerScorePerRound(playerScore, playerSelection4, computerSelection4) +
                    playerScorePerRound(playerScore, playerSelection5, computerSelection5);

  if (totalScoreC > totalScoreP) {
    alert("Computer Score is " + totalScoreC + "." + " Player Score is " + totalScoreP + "." + " You Lost. Computer Won.");
  } else if (totalScoreC < totalScoreP) {
    alert("Computer Score is " + totalScoreC + "." + " Player Score is " + totalScoreP + "." + " You Won.");
  } else {
    alert("Computer Score is " + totalScoreC + "." + " Player Score is " + totalScoreP + "." + " It's A Tie.");
  }
}

const playerSelection1 = prompt("Write Rock,Paper or Scissors").toUpperCase();
const computerSelection1 = computerPlay();

playRound(playerSelection1, computerSelection1);

const playerSelection2 = prompt("Write Rock,Paper or Scissors").toUpperCase();
const computerSelection2 = computerPlay();

playRound(playerSelection2, computerSelection2);

const playerSelection3 = prompt("Write Rock,Paper or Scissors").toUpperCase();
const computerSelection3 = computerPlay();

playRound(playerSelection3, computerSelection3);

const playerSelection4 = prompt("Write Rock,Paper or Scissors").toUpperCase();
const computerSelection4 = computerPlay();

playRound(playerSelection4, computerSelection4);

const playerSelection5 = prompt("Write Rock,Paper or Scissors").toUpperCase();
const computerSelection5 = computerPlay();

playRound(playerSelection5, computerSelection5);


totalResult();

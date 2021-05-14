let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerplay() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "ROCK";
  } else if (num === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
      return "It's a Tie.";
  } else if (
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
      return "You Win.";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
      return "Computer Wins.";
  }
}

function score() {
  if (playRound(playerSelection,computerSelection) === "You Win.") {
    return ++playerScore;
  } else if (playRound(playerSelection,computerSelection) === "Computer Wins.") {
    return ++computerScore;
  }
}

function game() {
  do {
    playerSelection = prompt("Enter Rock, Paper or Scissors. (Click cancel if you don't wanna play the game)").toUpperCase();
    computerSelection = computerplay();
    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
      playRound(playerSelection,computerSelection);
      score();
      alert(playRound(playerSelection,computerSelection) + " " + "Computer Score: " + computerScore + ". " + "Player Score: " + playerScore);
    } else {
      continue;
    }
  } while (computerScore < 5 && playerScore < 5);

  alert("Final Scores: Computer = " + computerScore + "  " + "Player = " + playerScore + " .");
  if (computerScore > playerScore) {
    alert("Computer Wins the Game.");
  } else {
    alert("You Win the Game.");
  }
}

game();

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('h5');
const resultDiv = document.querySelector('.result');
const resultFinal = document.querySelector('h6');
const main = document.querySelector('main');

let playerName = prompt("Enter your Name.");
const player = document.querySelector('.player');
if (playerName) {
  player.textContent = playerName;
}


const compControls = document.querySelectorAll('.comp-rock, .comp-paper, .comp-scissors');
function computerplay() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    compControls[0].style.border = "3px solid yellow";
    compControls[0].style.boxShadow = "1px 1px 15px 1px yellow";
    return "Rock";
  } else if (num === 1) {
    compControls[1].style.border = "3px solid yellow";
    compControls[1].style.boxShadow = "1px 1px 15px 1px yellow";
    return "Paper";
  } else {
    compControls[2].style.border = "3px solid yellow";
    compControls[2].style.boxShadow = "1px 1px 15px 1px yellow";
    return "Scissors";
  }
}


const playerResult = document.querySelector('#player-score');
const computerResult = document.querySelector('#comp-score');
function playRound(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "It's a Tie.";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerResult.textContent = ++playerScore;
    result.textContent = "Player Wins.";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerResult.textContent = ++computerScore;
    result.textContent = "Computer Wins.";
  }
}

function game() {
  computerSelection = computerplay();
  playRound(playerSelection,computerSelection);
  gameEnd(playerScore,computerScore);
}

function check(playerScore,computerScore) {
  return playerScore === 5 || computerScore === 5;
}


const playAgain = document.querySelector('#btn');
function gameEnd(playerScore,computerScore) {
  if (check(playerScore,computerScore)) {
    main.style.display = "none";
    result.style.display = "none";
    resultDiv.style.display = "flex";
    if (playerScore > computerScore) {
      resultFinal.textContent = "Player Wins the Game.";
    } else {
      resultFinal.textContent = "Computer Wins the Game.";
    }
    playAgain.style.display = "block";
    playAgain.addEventListener('click', () => location.reload());
  }
}


const playerControls = document.querySelectorAll('#Rock, #Paper, #Scissors');
const controls = document.querySelectorAll('.player-rock, .player-paper, .player-scissors, .comp-rock, .comp-paper, .comp-scissors');
for (let i = 0; i < playerControls.length; i++) {
  playerControls[i].addEventListener('click', () => {
      for (let x = 0; x < controls.length; x++) {
        controls[x].style.cssText = "border: none;box-shadow: 0;";
      }
      if (check(playerScore,computerScore)) {
        return;
      }
      playerControls[i].style.border = "3px solid yellow";
      playerControls[i].style.boxShadow = "1px 1px 10px 1px yellow";
      playerSelection = playerControls[i].getAttribute('id');
      game();
  });
}

const choices = ["Rock", "Paper", "Scissors"];
const rounds = 5;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getHumanChoice() {
  let userChoice = parseInt(
    prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors: ")
  );
  return choices[userChoice - 1]; // Subtract 1 to match the array index
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
  }
}

for (let i = 0; i < rounds; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
if (humanScore > computerScore) {
  console.log("Congratulations! You won the game!");
} else if (humanScore < computerScore) {
  console.log("Sorry, you lost the game.");
} else {
  console.log("The game is a tie!");
}

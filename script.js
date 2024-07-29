function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function intermediateFunction(num) {
    let result;
      if (num == 0) {
      result = 'rock';
      }
      else if (num == 1) {
      result = 'paper' 
      }
      else {
      result = 'scissors';
      }
  return result;

}
function getComputerChoice() {
  return intermediateFunction((getRandomInt(3)))}


function getHumanChoice() {
  let choice = prompt("Choose rock, paper or scissors");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
  if (humanChoice==computerChoice) {
    console.log("Draw");
    console.log("Player Score:" + humanScore);
    console.log("Computer Score:" + computerScore);
  }
  else if ((humanChoice=='rock' && computerChoice=='scissors')
    ||(humanChoice=='paper' && computerChoice=='rock')
    ||(humanChoice=='scissors' && computerChoice=='paper')){
    console.log("Player Win");
    humanScore++;
    console.log("Player Score:" + humanScore);
    console.log("Computer Score:" + computerScore);
  }
  
  else if ((humanChoice=='rock' && computerChoice=='paper')
    ||(humanChoice=='paper' && computerChoice=='scissors')
    ||(humanChoice=='paper' && computerChoice=='scissors')){
    console.log("Computer Win");
    computerScore++;
    console.log("Player Score:" + humanScore);
    console.log("Computer Score:" + computerScore);
  }
  
  else {
    console.log("Invalid option");
  }
  }

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame(humanChoice, computerChoice){
  for (let game = 0; game < 5; game++) {
    getComputerChoice();
    getHumanChoice();
    playRound (humanChoice, computerChoice)
  }
  return humanChoice, computerChoice;
}

console.log(playGame(humanSelection, computerSelection))
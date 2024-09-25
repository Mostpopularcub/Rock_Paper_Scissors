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
      else if (num == 2){
      result = 'scissors';
      }
  return result;

}

function getComputerChoice() {
  return intermediateFunction((getRandomInt(3)))}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
  if (humanChoice==computerChoice) {
    alert("Draw");
  }
  else if ((humanChoice=='rock' && computerChoice=='scissors')
    ||(humanChoice=='paper' && computerChoice=='rock')
    ||(humanChoice=='scissors' && computerChoice=='paper')){
    alert("Player Win");
    humanScore++;
  }
  
  else if ((humanChoice=='rock' && computerChoice=='paper')
    ||(humanChoice=='paper' && computerChoice=='scissors')
    ||(humanChoice=='scissors' && computerChoice=='rock')){
    alert("Computer Win");
    computerScore++;


  }
  let playerRecord = document.querySelector("#playerRecord");
  playerRecord.textContent = "Player Record: " + humanScore;
  
  let computerRecord = document.querySelector("#computerRecord");
  computerRecord.textContent = "Computer Record: " + computerScore;

  declareWinner();

  }

let humanSelection = 'rock'
let humanSelection2 = 'paper'
let humanSelection3 = 'scissors'
let computerSelection = getComputerChoice();

function declareWinner(){
  if (humanScore===5) {
    alert("Player Wins The Game!");
    humanScore = 0;
    computerScore = 0;
  }
  if (computerScore===5) {
    alert("Computer Wins The Game..."),
    humanScore = 0;
    computerScore = 0;

  }
  
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound(humanSelection,getComputerChoice())
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound(humanSelection2,getComputerChoice())
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound(humanSelection3,getComputerChoice())
});

let playerRecord = document.querySelector("#playerRecord")
playerRecord.textContent = "Player Record: " + humanScore

let computerRecord = document.querySelector("#computerRecord")
computerRecord.textContent = "Computer Record: " + computerScore
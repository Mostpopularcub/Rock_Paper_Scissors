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
    return "Draw";
  }
  else if ((humanChoice=='rock' && computerChoice=='scissors')
    ||(humanChoice=='paper' && computerChoice=='rock')
    ||(humanChoice=='scissors' && computerChoice=='paper')){
    return "Player Win";
  }
  
  else if ((humanChoice=='rock' && computerChoice=='paper')
    ||(humanChoice=='paper' && computerChoice=='scissors')
    ||(humanChoice=='paper' && computerChoice=='scissors')){
    return "Computer Win";
  }
  
  else {
    return "Choose rock, paper, or scissors";
  }
  }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection,computerSelection));

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
  if (choice='rock'){
    return 'rock'
  }
  else {
    return 'trryx'
  }
}

console.log(getHumanChoice())


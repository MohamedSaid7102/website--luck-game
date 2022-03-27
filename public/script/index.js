// Public Vars
const maxScore = 20;
let random = Math.floor(Math.random() * 7);

// Public DOM Vars
const maxScoreContainer = document.querySelector('.max-score');
const diceImage = document.getElementById('dice');
const player1FinalScore = document.getElementsByClassName(
  'player1__final-score'
)[0];
const player2FinalScore = document.getElementsByClassName(
  'player2__final-score'
)[0];
const player1CurrentScore = document.getElementsByClassName(
  'player1__current-score'
)[0];
const player2CurrentScore = document.getElementsByClassName(
  'player2__current-score'
)[0];

function gameInit() {
  rollingEffect();
  maxScoreContainer.textContent = maxScore; //set maximum score
  // reset all players score
  player1FinalScore.textContent =
    player2FinalScore.textContent =
    player1CurrentScore.textContent =
    player2CurrentScore.textContent =
      '0.0';
}

function rollTheDice() {
  random = Math.floor(Math.random() * 7);
  diceImage.setAttribute('src', `./assets/images/dice-${random}.png`);
  return random;
}

function rollingEffect() {
  let rolling = setInterval(rollTheDice, 100);
  setTimeout(() => {
    clearInterval(rolling);
    diceImage.setAttribute('src', `./assets/images/dice-img.png`);
  }, 2000);
}
// Manipulating dom

// Main Invokation

gameInit();

// Public Vars
const maxScore = 30;
let random = Math.floor(Math.random() * 7);

// Public DOM Vars
const maxScoreContainer = document.querySelector('.max-score');
const headingTxt = document.querySelector('.game-header');
const diceImage = document.getElementById('dice');
const player1 = document.getElementsByClassName('player-1')[0];
const player2 = document.getElementsByClassName('player-2')[0];
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
// Buttons
const rollBtn = document.getElementById('roll-btn');
const holdBtn = document.getElementById('hold-btn');
const newGameBtn = document.getElementById('new-game-btn');
// Active and not active players
let activePlayer = document.getElementsByClassName('active')[0];
let activePlayerCurrentScore = activePlayer.querySelector('.current-score');
let activePlayerFinalScore = activePlayer.querySelector('.final-score');
let notActivePlayer = document.getElementsByClassName('not-active')[0];
let notActivePlayerCurrentScore =
  notActivePlayer.querySelector('.current-score');
let notActivePlayerFinalScore = notActivePlayer.querySelector('.final-score');
// Fireworks vars
const container = document.querySelector('.fireworks-example');
const fireworks = new Fireworks(container, {
  rocketsPoint: 50,
  hue: { min: 0, max: 360 },
  delay: { min: 15, max: 30 },
  speed: 2,
  acceleration: 1.05,
  friction: 0.95,
  gravity: 1.5,
  particles: 50,
  trace: 3,
  explosion: 5,
  autoresize: true,
  brightness: {
    min: 50,
    max: 80,
    decay: { min: 0.015, max: 0.03 },
  },
  mouse: {
    click: false,
    move: false,
    max: 3,
  },
  boundaries: {
    x: 50,
    y: 50,
    width: container.clientWidth,
    height: container.clientHeight,
  },
  sound: {
    enable: true,
    files: ['explosion0.mp3', 'explosion1.mp3', 'explosion2.mp3'],
    volume: { min: 1, max: 2 },
  },
});
// ******************************** //

// Init function
function gameInit() {
  rollingEffect();
  headingTxt.innerHTML = `Play With A Friend 🎮<br />Max Score: <span class="max-score">${maxScore}</span>`;
  maxScoreContainer.textContent = maxScore; //set maximum score
  // reset all players score
  player1FinalScore.textContent =
    player2FinalScore.textContent =
    player1CurrentScore.textContent =
    player2CurrentScore.textContent =
      '0.0';
  player1.classList.add('active');
  player1.classList.remove('not-active');
  player2.classList.add('not-active');
  player2.classList.remove('active');

  fireworks.stop();
}

function gameOver(winnerName) {
  headingTxt.textContent = `${winnerName} Won..! 🎆`;
  fireworks.start();
}

// Adding Buttons behaviour
rollBtn.addEventListener('click', () => {
  let rolledNumber = rollTheDice();
  if (!rolledNumber) {
    // if it's 0
    activePlayerCurrentScore.textContent = '0.0';
    activePlayerFinalScore.textContent = '0.0';
    switchPlayers();
  } else {
    activePlayerCurrentScore.textContent =
      rolledNumber + +activePlayerCurrentScore.textContent;
  }
});

holdBtn.addEventListener('click', () => {
  activePlayerFinalScore.textContent =
    +activePlayerCurrentScore.textContent + +activePlayerFinalScore.textContent;
  activePlayerCurrentScore.textContent = '0.0';
  if (+activePlayerFinalScore.textContent >= maxScore) {
    let winnerName = activePlayer.querySelector('.player-name').textContent;
    gameOver(winnerName);
  } else {
    switchPlayers();
  }
});

newGameBtn.addEventListener('click', () => {
  gameInit();
});

function switchPlayers() {
  activePlayer.classList.remove('active');
  activePlayer.classList.add('not-active');
  notActivePlayer.classList.remove('not-active');
  notActivePlayer.classList.add('active');
  // Re select
  activePlayer = document.getElementsByClassName('active')[0];
  notActivePlayer = document.getElementsByClassName('not-active')[0];
  activePlayerCurrentScore = activePlayer.querySelector('.current-score');
  activePlayerFinalScore = activePlayer.querySelector('.final-score');
  notActivePlayerCurrentScore = notActivePlayer.querySelector('.current-score');
  notActivePlayerFinalScore = notActivePlayer.querySelector('.final-score');
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

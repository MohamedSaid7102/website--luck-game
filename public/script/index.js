// Public Vars
const maxScore = 20;

// Public DOM Vars
const maxScoreContainer = document.querySelector('.max-score');

function gameInit() {
  maxScoreContainer.textContent = maxScore;
}

// Manipulating dom

// Main Invokation

gameInit();

// Game Layout Edit scritp
let browserWidth = document.documentElement.clientWidth;
const newGameBtn = document.getElementById('new-game-btn');
const rollBtn = document.getElementById('roll-btn');
const holdBtn = document.getElementById('hold-btn');
const mediaBreakPoint = 750;
const editBtnContentOnResize = () => {
  browserWidth = document.documentElement.clientWidth;
  if (browserWidth <= mediaBreakPoint) {
    newGameBtn.innerText = '🆕';
    rollBtn.innerText = '🎲';
    holdBtn.innerText = '🕹';
  } else {
    newGameBtn.innerText = '🆕 New Game';
    rollBtn.innerText = '🎲 Roll';
    holdBtn.innerText = '🕹 Hold';
  }
};
window.addEventListener('resize', editBtnContentOnResize);
editBtnContentOnResize();

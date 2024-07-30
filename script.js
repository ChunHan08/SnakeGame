const playBoard = document.querySelector(".play-board");
let foodx, foodY;
let snakeX = 5 , snakeY = 10;
let velocityX = 0, velocityY = 0;


const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

const ChangeDiretion = (e) => {
  if(e.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
  initGame();
}
const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area: "><div>`;
  snakeX += velocityX;
  snakeY += velocityY;
  playBoard.innerHTML = htmlMarkup;
} 
changeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
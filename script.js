const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodx, foodY;
let snakeX = 5 , snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setInterVal;
let score = 0;

let highscore = localStorage.getItem("highscore") || 0;
highScoreElement.innerText = `High Score: ${highscore}`;

const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
  clearInterval(setInterValId);
  alert("Game Over!!!! Press ok to play again!")
  location.reload();
}
const ChangeDiretion = (e) => {
  if(e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft"&& velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight"&& velocityY != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}
controls.forEach(button => button.addEventListener("click", () => ChangeDiretion({key: button.dataset.key})));

const initGame = () => {
  if(gameOver) return handleGameOver();
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"><div>`;
  
  if(snakeX === foodX && snakeY === foodY){
    updateFoodPosition();
    snakeBody.push([snakeX, snakeY]);
    score++;
    highScore = score >= highscore ? score : highscore;
    localStorage.setItem("highscore", highScore);
    highScoreElement.innerText = `High Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;

  }
  snakeX += velocityX;
  snakeY += velocityY;
  
for (let i = snakeBody.length - 1; i >= 0; i--) {
  snakeBody[i] = snakeBody[i - 1];
}
snakeBody[0] = [snakeX, snakeY];
  snakeX += velocityX;
  snakeY += velocityY;

  if(snakeBody <= 0 || snakeX >= 30 || snakeY >= 30 || snakeY < 0) {
   return gameOver = true;
  }
  for (let i = 0; 1 < snakeBody.length; i++) {

    htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]}/ ${snakeBody[i][1]}"></div>`;
    if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][1] === snakeBody[i][1]){
      gameOver = true;
    }
  }
  playBoard.innerHTML = html;
} 
updateFoodPosition();
setInterValId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);
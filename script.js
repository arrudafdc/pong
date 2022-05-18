const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.font = '16px Monospace';

let keys = {};

const ball = {
  x: canvas.width / 2 - 15,
  y: canvas.height / 2 - 15,
  height: 30,
  width: 30,
  dirx: -1,
  diry: 1,
  mod: 0,
  speed: 50,
};

const leftBar = {
  x: 10,
  y: canvas.height / 2 - 60,
  height: 120,
  width: 30,
  score: 0,
  speed: 15,
};

const rightBar = {
  x: 560,
  y: canvas.height / 2 - 60,
  height: 120,
  width: 30,
  score: 0,
  speed: 15,
};

function draw() {
  ctx.clearRect(0, 0, canvas.height, canvas.width);

  ctx.fillRect(leftBar.x, leftBar.y, leftBar.width, leftBar.height);
  ctx.fillRect(rightBar.x, rightBar.y, rightBar.width, rightBar.height);
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

  ctx.fillText(`Player 1: ${leftBar.score}`, 10, 20);
  ctx.fillText(`Player 2: ${rightBar.score}`, 493, 20);
}

setInterval(draw, 10);

function handleKeydown(event) {
  if (event.key === 'w' && leftBar.y > 0) {
    leftBar.y = leftBar.y - leftBar.speed;
  }
  if (event.key === 's' && leftBar.y < 480) {
    leftBar.y = leftBar.y + leftBar.speed;
  }
  if (event.key === 'ArrowUp' && rightBar.y > 0) {
    rightBar.y = rightBar.y - rightBar.speed;
  }
  if (event.key === 'ArrowDown' && rightBar.y < 480) {
    rightBar.y = rightBar.y + rightBar.speed;
  }
}

window.addEventListener('keydown', handleKeydown);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
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
  ctx.fillStyle = "#FFF";
  ctx.fillRect(leftBar.x, leftBar.y, leftBar.width, leftBar.height);
  ctx.fillRect(rightBar.x, rightBar.y, rightBar.width, rightBar.height);
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
}

draw();

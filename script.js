var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const modulo = 750;
const degreeDiff = 360 / modulo;
const canvasRect = c.getBoundingClientRect();
const circleRadius = canvasRect.width / 2;
const circleMidY = circleRadius;
const circleMidX = circleRadius;
let paused = false;

document.addEventListener("keypress", (event) => {
  if (event.key === " ") {
    paused = !paused;
  }
});

let table = 250;
setInterval(() => {
  if (paused) return;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  for (let i = 1; i < modulo; i++) {
    let rad = (degreeDiff * i * Math.PI) / 180 - Math.PI / 2;
    ctx.moveTo(
      circleMidX + Math.cos(rad) * circleRadius,
      circleMidY + Math.sin(rad) * circleRadius
    );
    rad = (degreeDiff * ((i * table) % modulo) * Math.PI) / 180 - Math.PI / 2;
    ctx.lineTo(
      circleMidX + Math.cos(rad) * circleRadius,
      circleMidY + Math.sin(rad) * circleRadius
    );
    ctx.stroke();
  }
  ctx.closePath();
  table += 0.003;
  console.log(table)
}, 50);

// 300, 1, .01, 50
// 500, 1, .1, 50

// 750. 101, 0, 1
// 750, 126, 0, 1
// 750, 149, 0, 1
// 750, 250, .003, 50


// 1000, .25, 100
// 500, -3 - .01 - 50
// 500, 1, -0.1, 100

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const modulo = 120;
const degreeDiff = 360 / modulo;
const canvasRect = c.getBoundingClientRect();
const circleRadius = canvasRect.width / 2;
const circleMidY = circleRadius;
const circleMidX = circleRadius;
console.log()
let table = 1;
setInterval(() => {
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
  table += 0.01;
}, 100);

// setInterval(() => {
//     // ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
// }, 1001);

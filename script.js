var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const modulo = 750;
const degreeDiff = 360 / modulo;
const canvasRect = c.getBoundingClientRect();
const circleRadius = canvasRect.width / 2
const circleMidX = canvasRect.top + canvasRect.height / 2 - 3
const circleMidY = canvasRect.left + canvasRect.width / 2 - 3
let table = 102;
for (let i = 1; i < modulo; i++) {
    let rad = degreeDiff * i * Math.PI / 180 - Math.PI / 2;
    ctx.moveTo(circleMidX + Math.cos(rad) * circleRadius, circleMidY + Math.sin(rad) * circleRadius);
    rad = degreeDiff * ((i * table) % modulo) * Math.PI / 180 - Math.PI / 2;
    ctx.lineTo(circleMidX + Math.cos(rad) * circleRadius, circleMidY + Math.sin(rad) * circleRadius);
    ctx.stroke();
}
// setInterval(() => {
//     table += 0.1;
//     ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
//     ctx.fillStyle = "fff";
//     for (let i = 1; i < modulo; i++) {
//         let rad = degreeDiff * i * Math.PI / 180 - Math.PI / 2;
//         ctx.moveTo(circleMidX + Math.cos(rad) * circleRadius, circleMidY + Math.sin(rad) * circleRadius);
//         rad = degreeDiff * ((i * table) % modulo) * Math.PI / 180 - Math.PI / 2;
//         ctx.lineTo(circleMidX + Math.cos(rad) * circleRadius, circleMidY + Math.sin(rad) * circleRadius);
//         ctx.stroke();}
//     c.getContext("2d");
// }, 1000);

// setInterval(() => {
//     // ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
// }, 1001);

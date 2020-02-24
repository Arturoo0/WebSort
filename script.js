
var button = document.querySelector(".button");
var canvas = document.querySelector("canvas")
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.7 ;

var SOLVE_STATE = false;

button.onclick = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawList(genList(30));
}

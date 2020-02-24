
let button = document.querySelector("#button");
let canvas = document.querySelector("canvas")
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.7 ;

let xTracker = 0;
let increment = canvas.width/10;

lst = [100, 30, 57, 45, 33, 67, 88, 98, 32, 13];

for (let i = 0; i < 10; i++){
  c.fillRect(xTracker, 0, increment, lst[i]);
  xTracker += increment;
}

// button.onclick = () => {
//   console.log("1");
// }

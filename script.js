
let button = document.querySelector("#button");
let canvas = document.querySelector("canvas")
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.7 ;

function genList(size){
  lst = [];

  for (let i = 0; i < size; i++){
    lst.push(Math.random(canvas.height) * 100);
  }

  return lst;
}

function drawList(lst){

  increment = canvas.width/lst.length;
  currentX = 0;

  for (let i = 0; i < lst.length; i++){
    c.fillRect(currentX, 0, increment, lst[i]);
    currentX += increment;
  }
}

drawList(genList(400));

// button.onclick = () => {
//   console.log("1");
// }

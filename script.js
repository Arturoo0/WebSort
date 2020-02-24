
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

console.log(genList(5));


// button.onclick = () => {
//   console.log("1");
// }

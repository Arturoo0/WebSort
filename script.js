
let randomButton = document.querySelector("#randomize");
let solveButton = document.querySelector("#solve")
let canvas = document.querySelector("canvas")
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SOLVE_STATE = false;
let currentList;

let animQueue = new animationQueue();

randomButton.onclick = () => {
  // solveButton.disabled = true;
  animQueue.queue.length = 0;
  c.clearRect(0, 0, canvas.width, canvas.height);
  currentList = genList();
  // animQueue.animate();
  drawList(currentList);
  SOLVE_STATE = false;
}

solveButton.onclick = () => {
  if (SOLVE_STATE === false){
    animQueue.queue.length = 0;
    c.clearRect(0, 0, canvas.width, canvas.height);
    selectAlgo(currentList);
    animQueue.setSpeed();
    animQueue.animate();
    SOLVE_STATE = true;
  }
}

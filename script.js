
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
  solveButton.style.pointerEvents = 'none';
  console.log(solveButton.style.pointerEvents.value);
  animQueue.queue.length = 0;
  c.clearRect(0, 0, canvas.width, canvas.height);
  currentList = genList();
  animQueue.animate();
  SOLVE_STATE = false;
  solveButton.style.pointerEvents = 'auto';
}

solveButton.onclick = () => {
  if (SOLVE_STATE === false){
    animQueue.queue.length = 0;
    c.clearRect(0, 0, canvas.width, canvas.height);
    // bogoSort(currentList); call case
    selectAlgo(currentList);
    animQueue.setSpeed();
    animQueue.animate();
    SOLVE_STATE = true;
  }
}

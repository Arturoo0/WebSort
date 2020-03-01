
let listSize = document.querySelector("#sizeRange");
let dropDown = document.querySelector("#algos");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let coeffMap = {
  "selectionSort" : 6,
  "bubbleSort" : 2,
  "insertionSort" : 3,
  "bogoSort" : .10,
  "quickSort" : 6,
  "mergeSort" : 6
};

function genList(){

  listVal = parseFloat(listSize.value);
  let size = Math.floor(coeffMap[dropDown.value] * listVal);
  let lst = [];

  for (let i = 0; i < size; i++){
    lst.push(rand(canvas.height));
    // animQueue.enqueue(lst.slice());
  }

  return lst;
}

function drawList(lst){

  if (lst == null)
    return;

  let increment = canvas.width/lst.length;
  let currentX = 0;

  for (let i = 0; i < lst.length; i++){
    if (i % 2 == 0){
      c.fillStyle = "#364f6b";
      c.fillRect(currentX, canvas.height, increment, -lst[i]);
    }else{
      c.fillStyle = "#00adb5";
      c.fillRect(currentX, canvas.height, increment, -lst[i]);
    }

    currentX += increment;

  }
}

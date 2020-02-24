
function genList(size){
  lst = [];

  for (let i = 0; i < size; i++){
    lst.push(Math.random(canvas.height) * 200);
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

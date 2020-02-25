
function rand(x){ // not inclusive
  return Math.floor(Math.random() * Math.floor(x));
}

function genList(size){
  lst = [];

  for (let i = 0; i < size; i++){
    lst.push(rand(canvas.height));
  }

  return lst;
}

function drawList(lst){

  increment = canvas.width/lst.length;
  currentX = 0;

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

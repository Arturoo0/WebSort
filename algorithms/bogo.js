
function rand(x){ // not inclusive
  return Math.floor(Math.random() * Math.floor(x));
}

function bogoSort(lst){
  while (true){

    let sorted = true;

    let pos1 = rand(lst.length);
    let pos2 = rand(lst.length);

    let temp = lst[pos1];
    lst[pos1] = lst[pos2];
    lst[pos2] = temp;

    let lastInt = lst[0];
    for (let i = 1; i < lst.length; i++){
      if (lst[i] < lastInt)
        sorted = false;
      lastInt = lst[i];
    }

    animQueue.enqueue(lst.slice());

    if (sorted == true){
      animQueue.enqueue(lst.slice());
      return;
    }
  }
}

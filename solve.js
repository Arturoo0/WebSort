
function rand(x){ // not inclusive
  return Math.floor(Math.random() * Math.floor(x));
}

function bubbleSort(lst){
  while (true){
    swap = false;

    for (let i = 0; i < lst.length - 1; i++){
      if (lst[i] > lst[i + 1]){
        temp = lst[i];
        lst[i] = lst[i + 1];
        lst[i + 1] = temp;
        swap = true;
      }
    }
    if (swap == false)
      return lst;
  }
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

    if (sorted == true)
      return lst;
  }
}

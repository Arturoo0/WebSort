
function selectionSort(lst){

  let len = lst.length;

  for (let i = 0; i < len - 1; i++){

    let min = i;
    for (let swapPos = i + 1; swapPos < len; swapPos++){
      if (lst[swapPos] < lst[min]){
        min = swapPos;
      }
    }

    let temp = lst[min];
    lst[min] = lst[i];
    lst[i] = temp;

    animQueue.enqueue(lst.splice());
  }

  return;

}


function insertionSort(lst){

  let len = lst.length;

  for (let i = 0; i < len; i++){

    let val = lst[i];
    let swapPos = i - 1;

    while (swapPos >= 0 && lst[swapPos] > val){
      lst[swapPos + 1] = lst[swapPos];
      swapPos = swapPos - 1;
      animQueue.enqueue(lst.slice());
    }

    lst[swapPos + 1] = val;
    animQueue.enqueue(lst.slice());

  }
  return;
}

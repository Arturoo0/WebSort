function bubbleSort(lst){

  while (true){
    let swap = false;

    for (let i = 0; i < lst.length - 1; i++){
      if (lst[i] > lst[i + 1]){
        let temp = lst[i];
        lst[i] = lst[i + 1];
        lst[i + 1] = temp;
        swap = true;
      }

      animQueue.enqueue(lst.slice());

    }
    if (swap == false){
      animQueue.enqueue(lst);
      return;
    }

    swap = false;

  }
}

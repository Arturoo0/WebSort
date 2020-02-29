function bubbleSort(lst){

  let switch_ = 1;

  while (true){
    let swap = false;

    for (let i = 0; i < lst.length - 1; i++){
      if (lst[i] > lst[i + 1]){
        let temp = lst[i];
        lst[i] = lst[i + 1];
        lst[i + 1] = temp;
        swap = true;
      }

      if (switch_ == 1){
        animQueue.enqueue(lst.slice());
        switch_ = 0;
      }else
        switch_ = 1; 


    }
    if (swap == false){
      animQueue.enqueue(lst);
      return;
    }

    swap = false;

  }
}

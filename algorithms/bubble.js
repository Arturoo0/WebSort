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

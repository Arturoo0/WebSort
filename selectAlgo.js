
function selectAlgo(lst){

  let dropDown = document.querySelector("#algos");

  if (dropDown.value === "bubbleSort")
    bubbleSort(lst);
  else if (dropDown.value === "bogoSort")
    bogoSort(lst);
  else if (dropDown.value === "insertionSort")
    insertionSort(lst);
  else if (dropDown.value === "selectionSort")
    selectionSort(lst);
  else if (dropDown.value === "quickSort") {
    quickSort(lst);
  }
  else if (dropDown.value === "mergeSort") {
    mergeSort(lst);
  }

}

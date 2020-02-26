
function selectAlgo(lst){

  let dropDown = document.querySelector("#algos");

  if (dropDown.value == "bubbleSort")
    bubbleSort(lst);
  else if (dropDown.value == "bogoSort")
    bogoSort(lst);


}

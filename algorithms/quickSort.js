
function swap(i, j, lst) {
	let temp = lst[i];
	lst[i] = lst[j];
	lst[j] = temp;
  animQueue.enqueue(lst.slice());
}

function partition(low, high, lst) {
	if(low >= high) return;

	let pIndex = high;
	let pivot = lst[pIndex];

	let i = low; // Keep track of maximum

	for(let j = low; j < high; ++j) {
		if(lst[j] < pivot) {
			swap(i, j, lst);
			++i;
		}
	}

	swap(i, pIndex, lst);

	partition(low, i - 1, lst);
	partition(i + 1, high, lst);
}

function quickSort(lst) {
	partition(0, lst.length - 1, lst);
}

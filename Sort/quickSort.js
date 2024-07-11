const arr = [1,56,98,5,3,2,1,5,6,9,8,48, 22,15,69,54,3,2,9]
quickSort(arr);
console.log(arr)
function quickSort(arr, start = 0, end = arr.length) {
    if (start >= end) return arr;

    const pivot = pivotHelper(arr, start, end);

    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
    return arr;
    
}



const pivotIndex = pivotHelper(arr, 0, arr.length - 1);

function pivotHelper(arr, start = 0, end = arr.length - 1) {

    let pivotIndex = start;

    const pivotInitialIndex = pivotIndex;
    const pivotValue = arr[pivotInitialIndex];

    for (let i = start; i <= end; i++) {
        if (i === pivotInitialIndex) continue;

        if (arr[i] < pivotValue) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }

    swap(arr, pivotIndex, pivotInitialIndex)
    return pivotIndex;
}

function swap(arr, idx1, idx2) {
    let aux = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = aux;
}

const arr = [ 18, 29, 37, 64, 14, 10 , 14 , 30, 45  ]
console.log(bubbleSort(arr))
function bubbleSort(arr) {
    let noSwaps;
    let count = 0;
    for (let j = arr.length; j > 0; j--) {
        noSwaps = true; 
        for (let i = 0; i < j - 1; i++) {
            count++;
            if (arr[i] > arr[i + 1]) {
                noSwaps = false;
                swap(arr, i, i + 1)
            }
        }
        if(noSwaps) break;
    }

    console.log(count)
    return arr;
}

function swap(arr, idx1, idx2) {
    let aux = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = aux;
}
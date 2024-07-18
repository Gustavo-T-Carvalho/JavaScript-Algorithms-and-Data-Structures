const arr = [31, 41, 59, 26, 41, 58];
console.log(insertionSort(arr));
function insertionSort(arr) {
    for (j = 1; j < arr.length; j++) {
        const current = arr[j];
        for (i = j - 1; i >= 0 && arr[i] < current; i--) {
            arr[i + 1] = arr[i];
        }
        arr[i + 1] = current;
        console.log(JSON.stringify(arr))
    }
    return arr;
}
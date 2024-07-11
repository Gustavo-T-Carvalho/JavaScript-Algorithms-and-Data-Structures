const arr = [18, 29, 37, 64, 14, 10, 14, 30, 45]
console.log(selectionSort(arr))

function selectionSort(arr) {
    let count = 0;
    for (let j = 0; j < arr.length - 1; j++) {
        let smallestPosition = j;

        for (let i = j + 1; i < arr.length; i++) {
            count++;
            if (arr[i] < arr[smallestPosition]) {
                smallestPosition = i;
            }

        }

        if (j !== smallestPosition) {
            swap(arr, j, smallestPosition);
        }
    }
    console.log(count)
    return arr

}

function swap(arr, idx1, idx2) {
    let aux = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = aux;
}

const arr = [1, 5, 3, 2, 4, 6];

console.log(selectionSort(arr))

function selectionSort(arr) {
    for (let j = 0; j < arr.length - 2; j++) {
        let smallestIndex = j;

        for (let i = j; i < arr.length; i++) {
            if (arr[i] < arr[smallestIndex]) {
                smallestIndex = i;
            }
        }
        console.log(smallestIndex)
        if (smallestIndex !== j) {
            swap(arr, j, smallestIndex);
        }

    }
    return arr;
}

function swap(arr, p1, p2) {
    const aux = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = aux;
}
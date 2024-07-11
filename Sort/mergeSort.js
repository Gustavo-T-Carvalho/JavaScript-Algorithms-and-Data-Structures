const arr = mergeSort([2, 3, 4, 1, 45, 123, 565, 45, 14, 18, 36])
console.log(arr)
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const half = Math.ceil(arr.length / 2);

    const left = mergeSort(arr.slice(0, half));
    const right = mergeSort(arr.slice(half));



    return (mergeArray(left, right))
}



function mergeArray(left, right) {
    const arr = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        arr.push(left[i]);
        i++;
    }
    while (j < right.length) {
        arr.push(right[j]);
        j++;
    }

    return arr;
}
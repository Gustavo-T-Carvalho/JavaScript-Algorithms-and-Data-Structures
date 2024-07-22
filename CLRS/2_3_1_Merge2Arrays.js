const arr = [1, 3, 5, 8, 2, 4, 6, 7]

merge(arr, 3, 3, 4)

function merge(arr, pInitial, pMid, pEnd) {
    const leftLength = pMid - pInitial + 1;
    const rightLength = pEnd - pMid;
    const left = [];
    const right = [];
    for (let i = 0; i < leftLength; i++) {
        left[i] = arr[pInitial + i];
    }

    for (let j = 0; j < rightLength; j++) {
        right[j] = arr[pMid + j + 1];
    }

    left.push(Infinity);
    right.push(Infinity);

    let i = 0;
    let j = 0;

    for (let p = pInitial; p <= pEnd; p++) {
        if (left[i] <= right[j]) {
            arr[p] = left[i];
            i++;
        } else {
            arr[p] = right[j];
            j++;
        }
    }
}

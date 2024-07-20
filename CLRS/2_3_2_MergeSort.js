const arr = [8 , 7, 5, 2, 4 ,6, 3, 1]

mergeSort(arr, 0 , arr.length - 1)

function mergeSort(arr, pInitial, pEnd){
    if(pInitial < pEnd){
         const pMid = Math.floor((pInitial + pEnd) / 2);
        mergeSort(arr, pInitial, pMid);
        mergeSort(arr, pMid + 1, pEnd);
        console.log(arr)
        merge(arr, pInitial, pMid, pEnd);
    }
}

function merge(arr, pInitial, pMid, pEnd){
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
        if(left[i] <= right[j]){
            arr[p] = left[i];
            i++;
        } else {
            arr[p] = right[j];
            j++;
        }
    }
}

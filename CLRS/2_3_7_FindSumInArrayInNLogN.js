/*Um algoritmo de tempo Θ(n lg n) que, dado um conjunto S de n inteiros e um outro inteiro x,
determine se existem ou não dois elementos em S cuja soma seja exatamente x. */

const arr = [1,5,8,9,6]; //1 5 6 8 9
const sum = 10;

mergeSort(arr, 0, arr.length - 1);
console.log(findSumInArray(arr, sum));

function mergeSort(arr, pInitial, pEnd){
    if(pInitial < pEnd){
        const pMid = Math.floor((pInitial + pEnd) / 2);
        mergeSort(arr, pInitial, pMid);
        mergeSort(arr, pMid + 1, pEnd);
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

function findSumInArray(arr, sum){
    let found = false;
    let i = 0;
    let j;
    
    while(i < arr.length && !found){
        const goalNumber = sum - arr[i];
        j = binarySearch(arr, goalNumber, 0, arr.length - 1);
        if(j){
            found = true;
        } else {
            i++;
        }
    }

    const result = { found: found };

    if(found){
        result.positions = [i,j];
    }

    return result;
}


function binarySearch(arr, value, start, end){
    if(start > end){
        return undefined;
    }
    
    const midPoint = start + Math.floor((end - start) / 2);
    
    if(arr[midPoint] === value) {
        return midPoint;
    }

    if(arr.length === 1){
        return undefined;
    }
    
    if(arr[midPoint] < value){
        return binarySearch(arr, value, midPoint + 1, end);
    } else {
        return binarySearch(arr, value, start, midPoint - 1);
    }
}

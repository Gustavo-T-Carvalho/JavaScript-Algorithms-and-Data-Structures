// const arr = [18, 29, 37, 64, 14, 10, 14, 30, 45]
const arr = [2, 3, 4,1]

console.log(insertionSort(arr))

// function insertionSort(arr) {
//     let count = 0;

//     for (let j = 1; j < arr.length; j++) {
//         let correctPosition = j;
//         let currentValue = arr[j];
//         for (let i = j - 1; i >= 0; i--) {
//             if (arr[j] < arr[i]) {
//                 correctPosition = i;
//             } else {
//                 break;
//             }
//         }

//         if (correctPosition === j) continue;

//         for (let i = j; i > correctPosition; i--) {
//             arr[i] = arr[i-1];
//         }

//         arr[correctPosition] = currentValue;

//         console.log(`Number: ${arr[j]}. CorrectPosition: ${correctPosition}`)
//     }

//     // console.log(count)
//     return arr;
// }

function insertionSort(arr) {
    let count = 0;


    for (let j = 1; j < arr.length; j++) {
        let currentValue = arr[j];
        
        let i;
        for (i = j - 1; i >= 0 && arr[i] > currentValue; i--) {
            count++;
            arr[i + 1] = arr[i]
        }
        arr[i + 1] = currentValue
    }

    console.log(count)
    return arr;
}


function swap(arr, idx1, idx2) {
    let aux = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = aux;
}
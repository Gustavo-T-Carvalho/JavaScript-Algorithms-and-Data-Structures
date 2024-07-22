let array = [];
const results = [];

const kSizes = [32, 32, 32, 32, 32]

kSizes.forEach(k => {
    array = randomizeArray();
    console.log(array)
    let start = new Date().getTime();
    mergeSort(k, array, 0, array.length - 1)
    let end = new Date().getTime();
    console.log(JSON.stringify(array));
    let kTime = end - start
    results.push({
        k,
        kTime
    })
})

console.log(results);

function mergeSort(k, arr, pInitial, pEnd) {
    if (pInitial < pEnd) {
        const problemSize = Math.floor((pEnd - pInitial + 1) / 2);
        const pMid = Math.floor((pInitial + pEnd) / 2);

        if (problemSize <= k) {
            insertionSort(arr, pInitial, pMid);
            insertionSort(arr, pMid + 1, pEnd);
        } else {
            mergeSort(k, arr, pInitial, pMid);
            mergeSort(k, arr, pMid + 1, pEnd);
        }

        merge(arr, pInitial, pMid, pEnd);
    }
}

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

    let i = 0;
    let j = 0;

    for (let p = pInitial; p <= pEnd; p++) {
        if (i === leftLength) {
            arr[p] = right[j];
            j++;
            continue;
        }

        if (j === rightLength) {
            arr[p] = left[i];
            i++;
            continue;
        }

        if (left[i] <= right[j]) {
            arr[p] = left[i];
            i++;
        } else {
            arr[p] = right[j];
            j++;
        }
    }
}

function insertionSort(arr, pInitial, pEnd) {
    for (j = pInitial + 1; j <= pEnd; j++) {
        const current = arr[j];
        for (i = j - 1; i >= pInitial && arr[i] > current; i--) {
            arr[i + 1] = arr[i];
        }
        arr[i + 1] = current;
    }
}


function randomizeArray() {
    // Função para gerar um array com números de 1 a 2000
    function generateArray(size) {
        let array = [];
        for (let i = 1; i <= size; i++) {
            array.push(i);
        }
        return array;
    }

    // Função para embaralhar o array usando o algoritmo Fisher-Yates
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Gerar o array de números de 1 a 2000
    let numbersArray = generateArray(20000);

    // Embaralhar o array
    let shuffledArray = shuffleArray(numbersArray);

    return shuffledArray;
}
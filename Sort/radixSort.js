console.log(radixSort([105, 1, 55555, 65345, 12, 21, 3445, 123123, 5616]));

function radixSort(arr) {
    const maxDigits = getMaxDigits(arr);

    for (let i = 0; i < maxDigits; i++) {

        let bucketMapping = Array.from({length: 10}, () => [])
        for (let j = 0; j < arr.length; j++) {
            bucketMapping[getDigit(arr[j], i)].push(arr[j]);
        }

        arr = [].concat(...bucketMapping)
    }

    return arr;



}


function getDigit(number, position) {
    return Math.floor((number / Math.pow(10, position))) % 10;
}

function getDigitCount(number) {
    return Math.floor(Math.log10(number)) + 1;
}

function getMaxDigits(arr) {
    let maxDigits = 0;

    for (let i = 0; i < arr.length; i++) {
        let digits = getDigitCount(arr[i]);
        if (digits > maxDigits) {
            maxDigits = digits;
        }
    }

    return maxDigits
}
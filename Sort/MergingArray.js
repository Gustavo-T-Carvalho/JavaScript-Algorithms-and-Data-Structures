const arr = mergeArray([45,123], [564]);
console.log(arr)
function mergeArray(arr1, arr2) {
    const arr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j])
            j++
        }

    }

    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }


    return arr;

}
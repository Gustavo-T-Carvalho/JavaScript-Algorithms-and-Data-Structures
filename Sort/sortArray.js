[1,3,2,5,8]

function orderArray(arr){
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 1; j < arr.length - 1; j++){
            if(arr[i] > arr[j]){
                const aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
}

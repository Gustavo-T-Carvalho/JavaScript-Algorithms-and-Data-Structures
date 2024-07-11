function flatten(arr){
    let flattenedArr = [];
    
    arr.forEach(i => {
        if(!Array.isArray(i)){
            flattenedArr.push(i);
        } else {
            flattenedArr = flattenedArr.concat(flatten(i))
        }
    })
    return flattenedArr
}

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
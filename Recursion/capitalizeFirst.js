function capitalizeFirst (arr) {
    
    if(Array.isArray(arr)){
        return arr.map(i => {
            console.log(i);
            return capitalizeFirst(i);
        });
    } else {
        console.log(arr);
        let string = arr;
        return string[0].toUpperCase() + string.slice(1);
    }
    
        
  // add whatever parameters you deem necessary - good luck!
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

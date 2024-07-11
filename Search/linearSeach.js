linearSearch([10, 15, 20, 25, 30], 15)

function linearSearch(arr, value){
  let idx = -1;
  for(let i = 0; i<arr.length; i++){
      

    if(arr[i] === value){

          idx = i;
          break;
      }
  }

  return idx;
  // add whatever parameters you deem necessary - good luck!
}
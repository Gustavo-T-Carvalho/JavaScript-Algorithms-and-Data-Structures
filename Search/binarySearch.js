console.log(binarySearch([1,2,3,4,5],2)) // 1

console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1
function binarySearch(array, item){
    let leftPosition = 0;
    let rightPosition = array.length - 1;


    while(leftPosition < rightPosition){
        let middlePosition = Math.floor((leftPosition + rightPosition) / 2);
        if(array[middlePosition] === item){
            return middlePosition;
        } else  if(array[leftPosition] === item) {
            return leftPosition;
        }else  if(array[rightPosition] === item) {
            return rightPosition;
        }else if(array[middlePosition] < item ){
            leftPosition = middlePosition + 1;
        } else if(array[middlePosition] > item ){
            rightPosition = middlePosition - 1;
        }
    }

    if(leftPosition === rightPosition) {
        return -1;
    }
}
function capitalizeWords (arr) {
    if(Array.isArray(arr)){
           return arr.map(i => {
               return capitalizeWords(i);
           });
       } else {
           let string = arr;
           return string.toUpperCase();
       }
   }
   
    let words = ['i', 'am', 'learning', 'recursion'];
   let newWords = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
   console.log(newWords)
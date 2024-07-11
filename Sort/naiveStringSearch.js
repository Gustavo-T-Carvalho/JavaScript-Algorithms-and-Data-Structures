console.log(countString("gustavoustustuhstust", "ust"))


function countString(string, substring) {
    let count = 0;
    for (let i = 0; i <= string.length - substring.length; i++) {
        
        for (let j = 0; j < substring.length; j++) {
            if(string[i + j] !== substring[j]){
                break;
            }

            if(j === substring.length - 1){
                count++;
            }
            
        }

    }

    return count;
}

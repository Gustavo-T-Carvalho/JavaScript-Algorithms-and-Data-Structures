// A naive hash

function hash(string, arrayLength){
    let sum = 0;
    for(i in string){
        sum += (string.charCodeAt(i) - 96);
    }
    return sum % arrayLength;
}

console.log(hash("pink", 10));
console.log(hash("purple", 10));
console.log(hash("lemon", 10));


function hash(string, arrayLength){
    let sum = 0;
    let primeSalt = 17;
    for(let i = 0; i< Math.min(string.length, 100); i++){
        let value = (string.charCodeAt(i) - 96)
        sum = (sum * primeSalt + value) % arrayLength;
    }
    return sum;
}

console.log(hash("pink", 97));
console.log(hash("purple", 97));
console.log(hash("lemon", 97));


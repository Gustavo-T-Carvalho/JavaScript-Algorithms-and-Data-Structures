// 1 1 2 3 5 8 13 21 34

function fibonacci(n){
    if(n === 0 || n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(position){
    if(position === 0){
        return 0;
    }

    if(position === 1){
        return 1
    }

    return fibonacci(position - 2) + fibonacci(position - 1)
}

function fibonacci_memo(position, memo = [0, 1]){
    if(memo[position] !== undefined) return memo[position]
    
    const positionResult =  fibonacci(position - 2, memo) + fibonacci(position - 1, memo);
    memo[position] = positionResult;
    return positionResult 
}

function fibonacci_tabulation(position){
    let total = 0;
    const memo = [0, 1]
    for (let i = 0; i <= position; i++) {
        total += memo[i];
        memo.push(total);
    }
    return total;
}

console.log(fibonacci_memo(1476))

console.log(fibonacci_tabulation(1476))

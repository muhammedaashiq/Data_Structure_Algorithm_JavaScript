
let fib = [0, 1]

function fibonacci(nums) {
    for (let i = 2; i < nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(5))

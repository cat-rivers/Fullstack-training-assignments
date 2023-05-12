"use strict";
//Fibonacci
let sequence = [0, 1];
function fibonacci(n) {
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(8));

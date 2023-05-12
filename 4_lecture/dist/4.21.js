"use strict";
//Prime numbers
function isPrime(num) {
    let divBy = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divBy.push(i);
        }
    }
    if (divBy.length === 2) {
        console.log(`${num} is a prime number`);
    }
    else {
        console.log(`${num} is not a prime number`);
    }
}
//primes
isPrime(83);
isPrime(89);
isPrime(97);
//not primes
isPrime(4);
isPrime(6);
isPrime(8);
isPrime(9);
isPrime(12);
isPrime(10);

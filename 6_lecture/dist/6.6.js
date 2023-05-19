"use strict";
//Largest number
const array = [7, 2, 13, 15, 4, 5, 16, 14];
const array1 = [-10, -2, -6, 1, -10, -3];
function largestNumber(arr) {
    return arr.reduce((acc, curr) => acc > curr ? acc : curr);
}
function secondLargestNumber(arr) {
    const largest = largestNumber(arr);
    let secondLargest = Number.NEGATIVE_INFINITY;
    ;
    for (let num of arr) {
        if (num !== largest && num > secondLargest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}
console.log(largestNumber(array));
console.log(secondLargestNumber(array));
console.log(largestNumber(array1));
console.log(secondLargestNumber(array1));

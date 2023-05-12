//Array Manipulation

const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

const divisibleByThree = arr.filter(num => num % 3 === 0);
console.log(divisibleByThree);

const multipliedByTwo = arr.map(num => num * 2);
console.log(multipliedByTwo);

const sum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(sum)


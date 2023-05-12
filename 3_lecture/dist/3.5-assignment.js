"use strict";
const arr = ["banaani", "omena", "mandariini", "appelsiini", "kurkku", "tomaatti", "peruna"];
//1. Print first and last element
console.log(arr[0], arr[arr.length - 1]);
//2. sort and print array
arr.sort();
console.log(arr);
//3. add sipuli and re print
console.log(`------------------------- \n`);
arr.push("sipuli");
console.log(arr);
//EXTRA
//4. remove first itme and re print
console.log(`------------------------- \n`);
arr.shift();
console.log(arr);
//.5 print each item using .foreach()
console.log(`------------------------- \n`);
arr.forEach(element => console.log(element));
//6. print each item with letter "r"
console.log(`-------------------------  \n`);
arr.map(element => (element.includes("r")
    ? console.log(element)
    : null));

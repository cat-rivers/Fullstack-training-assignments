"use strict";
// Count Sheep
// Run in command line -->  node dist/4.13.js <number>
const numOfSheep = parseInt(process.argv[2]);
function countSheep(num) {
    let res = "";
    for (let i = 1; i <= num; i++) {
        res = res + `${i} sheep...`;
    }
    console.log(res);
}
countSheep(numOfSheep);

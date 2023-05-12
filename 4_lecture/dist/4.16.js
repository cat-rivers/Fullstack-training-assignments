"use strict";
//Range with
// !run command line --> node dist/4.16.js <arg1> <arg2>
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);
function arrayMaker(start, end) {
    let res = [];
    if (start < end) {
        for (let i = start; i < end; i++) {
            res.push(i);
        }
    }
    else {
        for (let i = start; i > end; i--) {
            res.push(i);
        }
    }
    console.log(res);
}
arrayMaker(arg1, arg2);
arrayMaker(1, 5);
arrayMaker(78, 72);

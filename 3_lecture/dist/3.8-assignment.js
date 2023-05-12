"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let i = 0;
let sum = 0;
let n = 17;
while (i <= n) {
    if (i % 5 === 0 || i % 3 === 0) {
        sum = sum + i;
    }
    i = i + 1;
}
console.log(sum);

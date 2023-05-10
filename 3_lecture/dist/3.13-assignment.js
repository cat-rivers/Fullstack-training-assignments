"use strict";
//How many days
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const input = Number(process.argv[2]);
console.log(`Month ${input} has: ${arr[input - 1]} days`);

"use strict";
// function fibonacciSequence() {
//   let a = 0;
//   let b = 1;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//   console.log(a); // Print the first number of the sequence
//   const intervalId = setInterval(() => {
//     const nextNumber = a + b;
//     console.log(nextNumber);
//     a = b;
//     b = nextNumber;
//   }, 1000);
//   // Stop the interval after a certain number of iterations (optional)
//   setTimeout(() => {
//     clearInterval(intervalId);
//   }, 10 * 1000); // Stop after 10 seconds (adjust the time as needed)
// }
// fibonacciSequence();
function fibonacciSequence(num) {
    return __awaiter(this, void 0, void 0, function* () {
        let a = 0;
        let b = 1;
        let i = 1;
        console.log(a); // Print the first number of the sequence
        while (i < num) {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            const nextNumber = a + b;
            console.log(nextNumber);
            a = b;
            b = nextNumber;
            i++;
        }
    });
}
fibonacciSequence(10);

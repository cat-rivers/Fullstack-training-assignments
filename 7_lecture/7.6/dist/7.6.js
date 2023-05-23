"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
function calculator(operator, num1, num2) {
    let res;
    switch (operator) {
        case "+":
            return (res = num1 + num2);
        case "-":
            return (res = num1 - num2);
        case "/":
            return (res = num1 / num2);
        case "*":
            return (res = num1 * num2);
        default:
            return "you cant do that D:";
    }
}
exports.calculator = calculator;
console.log(calculator("+", 1, 2));

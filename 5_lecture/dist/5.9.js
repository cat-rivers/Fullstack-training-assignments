"use strict";
// Calculator
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
console.log(calculator("+", 1, 2));

export function calculator(operator: string, num1: number, num2: number): number | string{
    let res: number;
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
console.log(calculator("+", 1,2))
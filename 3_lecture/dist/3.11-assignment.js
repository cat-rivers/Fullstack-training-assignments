"use strict";
// Create a program that takes in two numbers a and b from the command line.
// Print out "a is greater" if a is bigger than b, and vice versa, and "they are equal" if they are equal
// Modify program to take in a third string argument c, and print out "yay, you guessed the password", if a and b are equal AND c is "hello world"
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = process.argv[4];
const d = process.argv[5];
const func = (a, b, c) => {
    if (a === b && c === "hello world") {
        console.log("you guessed the password!");
    }
    else if (a > b) {
        console.log("a is greater than b");
    }
    else if (b > a) {
        console.log("b is greater than a");
    }
    else {
        console.log("a and b are the same ");
    }
};
func(a, b, c);

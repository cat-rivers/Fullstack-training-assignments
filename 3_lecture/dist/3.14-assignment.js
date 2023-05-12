"use strict";
// ATM Machine
const balance = 0;
const isActive = false;
const checkBalance = false;
if (checkBalance) {
    if (isActive) {
        if (balance > 0) {
            console.log("balance: " + balance + " €");
        }
        else if (balance < 0) {
            console.log("your account is negative");
        }
        else {
            console.log("Your account is empty");
        }
    }
    else {
        console.log("your account is not active");
    }
}
else {
    console.log("Have a nice day!");
}

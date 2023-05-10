"use strict";
// ATM Machine
const balance = 0;
const isActive = true;
const checkBalance = true;
if (checkBalance) {
    if (isActive) {
        if (balance > 0) {
            console.log(balance);
        }
        else if (balance === 0) {
            console.log("Your account is empty");
        }
        else {
            console.log("your account is negative");
        }
    }
    else {
        console.log("your account is not active");
    }
}
else {
    console.log("Have a nice day!");
}

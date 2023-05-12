"use strict";
//palindrome
const arg = process.argv[2];
let palindrome = true;
function checkIsPalindrome(str) {
    const word = str.toLowerCase();
    for (let i = 0; i < word.length / 2 + 1; i++) {
        let j = word.length - i - 1;
        if (word[i] === word[j]) {
            palindrome = true;
        }
        else {
            palindrome = false;
        }
    }
    console.log(palindrome
        ? `yes, ${str} is a palindrome`
        : `no, ${str} is not a palindrome`);
}
checkIsPalindrome(arg);

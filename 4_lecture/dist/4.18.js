"use strict";
//palindrome
const arg = "Madam";
let palindrome;
function checkIsPalindrome(str) {
    const word = str.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        let j = word.length - 1 - i;
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

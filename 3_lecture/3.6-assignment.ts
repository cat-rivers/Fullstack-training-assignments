//Using the for loop for each problem, print out the following number sequences:

// 0 100 200 300 400 500 600 700 800 900 1000

let ans = "1: ";
for (let i = 0; i <= 10; i++) {
    ans = ans + i * 100 + " ";
}
console.log(ans);

// 1 2 4 8 16 32 64 128

let ans2 = "2: "
for(let i = 0 ; i < 8 ; i++){
    ans2 = ans2 + (2 ** i) + " "
}
console.log(ans2)


// 3 6 9 12 15

let ans3 = "3: "

for(let i = 1 ; i <= 5 ; i++){
    ans3 = ans3 + (i * 3) + " "
} 
console.log(ans3)


// 9 8 7 6 5 4 3 2 1 0

let ans4 = "4: ";
for (let i = 9; i >= 0; i--) {
    ans4 = ans4 + i + " ";
}
console.log(ans4);

// 1 1 1 2 2 2 3 3 3 4 4 4

let ans5 = "5: ";
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j <= 2; j++) {
        ans5 = ans5 + i + " ";
    }
}
console.log(ans5);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let ans6 = "6: ";
for (let i = 1; i <= 3; i++) {
    for (let j = 0; j <= 4; j++) {
        ans6 = ans6 + j + " ";
    }
}

console.log(ans6);
// Reverse words
//! run command line --> node dist/4.17.js <"arg1"> 


const phrase = process.argv[2]


const reversedPhrase = phrase
    .split(" ")
    .map(el => el.split("").reverse().join(""))
    .join(" ");


console.log(reversedPhrase)
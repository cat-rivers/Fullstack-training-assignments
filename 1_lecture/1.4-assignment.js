const str1 = "catalina"
const str2 = "poopie"

//1. create combined string

const newStr = str1 + str2
console.log(newStr)

//print lengths
console.log(str1.length , str2.length)

//avergage length
const avgLength = (str1.length + str2.length)/2
console.log(avgLength)


//print first string to uppercase
console.log(str1.toUpperCase())

//print first and last letter of string 2

console.log(str2[0] ,  str2.slice(-1))
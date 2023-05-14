const strInput = process.argv[2]
const char = process.argv[3]
const replacer = process.argv[4]

const reg = /\char/g
console.log(strInput.replaceAll(char, replacer))
import fs from 'fs'

console.log("hello we are alive!")

let text = fs.readFileSync('./src/example.txt','utf-8')

const reg_kinkku = /joulu/gi
const reg_porro = /lapsi/gi

console.log(text.toLowerCase().replace(reg_kinkku, "kinkku").replace(reg_porro, "porro"))
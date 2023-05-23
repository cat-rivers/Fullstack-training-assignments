//Command line converter

import { parse } from "path"


/*
!Units available:
- dl : deciliter
- li: liter
- c: cup
- oz: ounce
- ip: imperial pint*/

// run : nodemon ./src/7.7.ts <amount: number> <unitFrom: string> <unit to: string>

const amount = parseInt(process.argv[2])
const unitFrom = process.argv[3]
const unitTo = process.argv[4]
let res: number
function units(amount: number, unitOne: string, unitTwo:string){
  if(unitOne === "c"){
    if(unitTwo === "dl"){res = amount * 2.36588}
    if(unitTwo === "li"){res = amount * 0.23658}
    if(unitTwo === "oz"){res = amount * 8}
    if(unitTwo === "ip"){res = amount * 0.416337}
    
  }
  return res
}

console.log(units(amount,unitFrom,unitTo))
console.log(units(6,"c","li"))
console.log(units(6,"c","ip"))
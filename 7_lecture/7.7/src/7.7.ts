//Command line converter

/*
!Units available:
- dl : deciliter
- liter: liter
- cup: cup
- ounce: ounce
- pint: us pint*/

// run : nodemon ./src/7.7.ts <amount: number> <unitFrom: string> <unit to: string>
interface ConversionTable {
  [key: string]: number;
}



export function convertVolume (inputAmount:number, sourceUnit: string, targetUnit:string){
  const conversionTable: ConversionTable = {
    dl: 100,
    liter: 1000,
    ounce: 29.5735,
    cup: 236.588,
    pint: 473.176,
  }

   const sourceValue = conversionTable[sourceUnit]
   const targetValue = conversionTable[targetUnit]
   const result = (inputAmount * sourceValue)/targetValue 
   console.log(`${amount} ${sourceUnit} is: ${result} ${targetUnit}`)
}

const amount = parseInt(process.argv[2])
const unitFrom = process.argv[3]
const unitTo = process.argv[4]


convertVolume(amount, unitFrom,unitTo) 






"use strict";
// //Command line converter
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertVolume = void 0;
function convertVolume(inputAmount, sourceUnit, targetUnit) {
    const conversionTable = {
        dl: 100,
        liter: 1000,
        ounce: 29.5735,
        cup: 236.588,
        pint: 473.176,
    };
    const sourceValue = conversionTable[sourceUnit];
    const targetValue = conversionTable[targetUnit];
    const result = (inputAmount * sourceValue) / targetValue;
    console.log(`${amount} ${sourceUnit} is: ${result} ${targetUnit}`);
}
exports.convertVolume = convertVolume;
const amount = parseInt(process.argv[2]);
const unitFrom = process.argv[3];
const unitTo = process.argv[4];
convertVolume(amount, unitFrom, unitTo);

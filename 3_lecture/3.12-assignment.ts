//From the command line read in three numbers, number1, number2 and number3. Decide their values freely.
//find largest, smallest, or equal


const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
const c: number = Number(process.argv[4])

const largest = Math.max(a,b,c)
const smallest = Math.min(a,b,c)

if(a === b && b === c){
    console.log("they are the same")
}else{
    console.log(`largest: ${largest} \nsmalles: ${smallest}`)
}


export {}
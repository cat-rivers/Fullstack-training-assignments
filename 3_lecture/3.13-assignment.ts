//How many days

const arr = [31,28,31,30,31,30,31,31,30,31,30,31]
const input: number = Number(process.argv[2])

console.log(`Month ${input} has: ${arr[input-1]} days`)


export {}

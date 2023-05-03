/* Area of a Square

1. Create a program that takes in a number from command line that represents a length of a squares sides. 
2. Calculate the area of the square with given number.

Hint: Command line arguments are found in an array called:
process.argv
*/


const input = process.argv[2]

const areaOfSquare = ( length) => {
  const result = Number(length) ** 2;
  console.log(`the area of your square is: ${result}`)

}

areaOfSquare(input)
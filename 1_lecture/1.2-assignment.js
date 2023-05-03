/*  Primitives
1. Write a program that declares three variables. string, number, boolean
2. Log each of these variables, and their data type using the typeof method.
3. Change one of the variables to include a new value. Log the values and types of the variables again.
4. Include at least one comment in your program.
*/

const str = "poop";
const bool = false;
let num = 12;

const variableChecker = (var1, var2, var3) => {
  //this function logs 3 variables and their data type
  console.log(var1, typeof var1);
  console.log(var2, typeof var2);
  console.log(var3, typeof var3);
};


//log variable and types
variableChecker(str, bool, num);

//change value of one of variables
num = 20;

//log again
variableChecker(str, bool, num);

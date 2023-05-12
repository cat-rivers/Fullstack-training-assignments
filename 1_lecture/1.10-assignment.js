/* 
Write a program that has four values: 
lastName (type: string)
age ( type: number)
isDoctor(type: boolean)
sender( type: string)
The name parameters should be strings, age a number and isDoctor a boolean.
*/


const lastName = "Riveros";
const age = 102;
const isDoctor = false;
const sender = "Camila Muniz";
const title = isDoctor? "Dr.": "Mx. "
const newAge = (age + 1).toString()
const newAgeLastNumber = newAge[newAge.length - 1]
let suffix

 switch (newAgeLastNumber) {
  case "1":
   suffix = "st";
    break;
  case "2":
    suffix = "nd";
    break;
  case "3":
    suffix = "rd";
    break;
  default:
    suffix =  "th";
}

const nextAge = newAge + suffix


console.log(
  `
Dear ${title} ${lastName}

Congratulations on your ${nextAge} birthday! Many happy returns!

Sincerely,
${sender}

  `
)
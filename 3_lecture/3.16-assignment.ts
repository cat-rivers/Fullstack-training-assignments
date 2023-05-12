// Modify Case
//nodemon 3.16-assignment.ts upper "i am a snowperson"
// CaseTypes can be "upper" or "lower"

const caseType = process.argv[2]
const string = process.argv[3]

const modifyCase = (caseT: string, str: string) => {
  switch(caseT.toLowerCase()){
    case "upper":
      console.log(str.toUpperCase())
      break;
    case "lower":
      console.log(str.toLowerCase())
      break;
    default: console.log("Error, check your arguments")
  }
}

modifyCase(caseType, string)


export {}
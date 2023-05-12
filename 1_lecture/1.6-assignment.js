
const str = process.argv[2] 


// modify strings
const stringModifyer = (string) => {
  const newString = string.trim().substring(0,19)
  const result = newString[0].toLowerCase() + newString.substring(1)

  console.log(result)
}


//check if string meets conditions
const stringchecker = (string) => {
  

  const isTrimmed = string === string.trim()
  const isLessThan20 = string.length <= 20
  const isLowerCase = string[0] == string[0].toLowerCase()


  isLessThan20 && isTrimmed && isLowerCase
    ? console.log("ok")
    : console.log("ERROR!");
};


stringModifyer(str)
stringchecker(str)

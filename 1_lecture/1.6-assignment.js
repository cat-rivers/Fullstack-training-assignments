
const str = process.argv[2] 


// modify strings
const stringModifyer = (string) => {
  const newString = string.trim().substring(0,19)
  const result = newString[0].toLowerCase() + newString.substring(1)

  console.log(result)
}


//check if string meets conditions
const stringchecker = (string) => {
  let isLessThan20;
  let istrimmed;
  let isLowerCase;

  string !== string.trim() // TODO: not evaluating this // argv trims space automatically so always isTrimmed
    ? (istrimmed = false)
    : (istrimmed = true);

  string.length <= 20
    ? (isLessThan20 = true)
    : (isLessThan20 = false);

  string[0] == string[0].toLowerCase()
    ? (isLowerCase = true)
    : (isLowerCase = false);

  isLessThan20 && istrimmed && isLowerCase
    ? console.log("ok")
    : console.log("ERROR!");
};


stringModifyer(str)
stringchecker(str)
const stringchecker = (string) => {
  let isLessThan20;
  let istrimmed;
  let isLowerCase;

  string === string.trim()
    ? (istrimmed = true)
    : (istrimmed = false);

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

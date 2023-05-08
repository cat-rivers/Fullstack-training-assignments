const stringchecker = (string) => {
  let isLessThan20;
  let istrimmed;
  let isLowerCase;

  string === string.trim()
    ? (istrimmed = true)
    : (istrimmed = false);

    // this is a bit complex syntax, better way would be
    // const isTrimmed = string === string.trim()

  string.length <= 20
    ? (isLessThan20 = true)
    : (isLessThan20 = false);
    // const isLessThan20 = string.length <= 20

  string[0] == string[0].toLowerCase()
    ? (isLowerCase = true)
    : (isLowerCase = false);
    // etc

  isLessThan20 && istrimmed && isLowerCase
    ? console.log("ok")
    : console.log("ERROR!");
};

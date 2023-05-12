function firstToUpperCase(string: string) {
  const strArr = string
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");


  console.log(strArr);
}

firstToUpperCase("cati is a poopy head")
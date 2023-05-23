//Credential generator





// ?Joonas version for testing
// const randUname = function (firstname: string, lastname: string) {
//   const year: number = new Date().getFullYear();
//   const yearDigits: string = year.toString().slice(-2);
//   const randLetterIndex: number = Math.floor(Math.random() * 26) + 65;
//   const randLetter = String.fromCharCode(randLetterIndex);
//   const randCharIndex = Math.floor(Math.random() * 15) + 33;
//   const randChar = String.fromCharCode(randCharIndex);
//   const username = `B${yearDigits}${firstname
//     .slice(0, 2)
//     .toLowerCase()}${lastname.slice(0, 2).toLowerCase()} `;
//   const password = `${randLetter}${firstname.charAt(0).toLowerCase()}${lastname
//     .slice(-1)
//     .toUpperCase()}${randChar}${yearDigits}`;
//   return `Username:${username}\nPassword:${password}`;
// };
// console.log(randUname("Luke", "Skywalker"));
// console.log(randUname('John', 'Doe'));
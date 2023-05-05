const a = 5;
const b = 3


const calculate = ( num1, num2) => {
  const sum = num1 + num2
  const diff = num1 - num2
  const fra = num1 / num2
  const prod = num1 * num2
  const avg = sum /2
  const mod = num1 % num2
  const exp = num1 ** num2

  console.log( `
  sum : ${sum}
  diff : ${diff}
  fra : ${fra}
  prod : ${prod}
  avg : ${avg}
  mod : ${mod}
  expo : ${exp}
 
  `)
}



calculate(a,b)
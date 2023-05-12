//4.6 Recursion Functions


const factorial = (n: number): number => {
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return n;
  }
};

console.log(factorial(4))
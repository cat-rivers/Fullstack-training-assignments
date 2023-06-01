async function fibonacciSequence(num:number) {
  let a = 0;
  let b = 1;
  let i = 1
  console.log(a); // Print the first number of the sequence
  
  while (i < num) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const nextNumber = a + b;
    console.log(nextNumber);
    a = b;
    b = nextNumber;
    i++
  }
}

fibonacciSequence(10);

export {}
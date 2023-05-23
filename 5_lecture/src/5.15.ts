// Collatz conjecture

function collatz(n: number){
  let steps:number = 0
  let nTemp = n

  while(nTemp !== 1){
    if(nTemp % 2 === 0 ){
      nTemp = nTemp /2 ;
      steps +=1
    }else{
      nTemp = (nTemp * 3) +1;
      steps += 1
    }
   
  }
 
 return `it took ${steps} steps to reach 1`
}


console.log(collatz(3))
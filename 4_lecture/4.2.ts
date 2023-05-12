// Random Number 


function randomizer (min: number, max:number):number {

      const res = Math.floor(Math.random() * (max- min) + min)
      return res
  }
  
  
  console.log(randomizer(3,5))
  console.log(randomizer(1,8))
  console.log(randomizer(2,8))
  console.log(randomizer(4,7))
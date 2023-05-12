//Conditionals

//Game of hearts
const playerCount = 4

if (playerCount === 4) {
  console.log("Have fun!");
} else {
  console.log("Wrong number of players");
}
  


//Is Mark happy?

const isStressed = true;
const hasIceCream = false;

if( !isStressed || hasIceCream){
  console.log("Mark is happy")
}else{
  console.log("Mark is not Happy D:")
}


//Is it a beach day?

const isSunny = true;
const temperature = 20;
const isCloudy = true;

if(isSunny && temperature > 19 && !isCloudy){
  console.log("Its a beach day!")
}else{
  console.log("its not a beach day")
}

//Is Arin Happy?

const seesSuzy = false;
const seesDan = false;
const isTuesday = true;

if(isTuesday && seesDan !== seesSuzy){
  console.log("Arin is Happy")
}else{
  console.log("Arin is not happy D:")
}



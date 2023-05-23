//classes

class Ingredient {
  name: string;
  amount: number;
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
  scale(n: number) {
    this.amount = this.amount * n;
  }
}

class Recipe {
  name: string;
  ingredients: Array<{ name: string; amount: number }>;
  servings: number;
  constructor(
    name: string,
    ingredients: { name: string; amount: number }[],
    servings: number
  ) {
    this.name = name;
    this.ingredients = ingredients;
    this.servings = servings;
  }
  setServings(num: number) {
    this.ingredients.forEach((ingr) => {
      ingr.amount = ingr.amount * num; this.servings = num
    });
  }
  print() {
    console.log(
      "Your recipe is " +
        this.name +
        ": " +
        this.ingredients.map((ing) => ing.name).toString()
    );
  }
}

const onion = new Ingredient("onion", 1);
const potato = new Ingredient("potato", 2);
const salt = new Ingredient("salt", 1);

const onionSoup = new Recipe(
  "onion soup",
  [onion, salt, potato],
  1
);

const potatoSoup = new Recipe(
  "potato soup",
  [salt, potato],
  2
);


console.log(onionSoup);
onionSoup.setServings(5);
console.log(onionSoup);

//Potato

console.log(potatoSoup)
potatoSoup.setServings(10)
console.log(potatoSoup)

//! the ingredients object is keeping the serving changes...
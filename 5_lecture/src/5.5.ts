// hot recipe

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

class HotRecipe extends Recipe {
  heat: number;

  constructor(
    name: string,
    ingredients: Ingredient[],
    servings: number,
    heat: number
  ) {
    super(name, ingredients, servings);
    this.heat = heat;
  }
  print() {
    const ingr = this.ingredients.map(ing => ing.name);
    const text = `${this.name}: ${ingr}`;

    this.heat >= 5
      ? console.log("Warning: really hot recipe \n " + text)
      : console.log(text);
  }
}

const onion = new Ingredient("onion", 1);
const potato = new Ingredient("potato", 2);
const salt = new Ingredient("salt", 1);

const chilliSoup = new HotRecipe("Chilli no carne", [onion, salt],1,8)

console.log(chilliSoup.print())

//! my print function has an issue..return undefined after printing ingredients. 

export {}
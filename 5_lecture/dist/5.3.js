"use strict";
//Prototype recipes
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    scale(n) {
        this.amount = this.amount * n;
    }
}
class Recipe {
    constructor(name, ingredients, servings) {
        this.name = name;
        this.ingredients = ingredients;
        this.servings = servings;
    }
    setServings(num) {
        this.ingredients.forEach((ingr) => {
            ingr.amount = ingr.amount * num;
        });
    }
    print() {
        console.log("Your recipe is " +
            this.name +
            ": " +
            this.ingredients.map((ing) => ing.name).toString());
    }
}
const onion = new Ingredient("onion", 1);
const potato = new Ingredient("potato", 2);
const salt = new Ingredient("salt", 1);
const onionSoup = new Recipe("onion soup", [onion, salt, potato], 1);
console.log(onionSoup);
onionSoup.setServings(5);
console.log(onionSoup);

const coffeeMenu = require("./coffee_data.js");

//2. Print an array of all the drinks on the menu.

const printDrink = (drink) => {
  return drink.name;
}
console.log(coffeeMenu.map(printDrink));

//3. Print an array of drinks that cost 5 and under.

const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(cheapDrinks);
//4. Print an array of drinks that are priced at an even number.

const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenPricedDrinks);

//5. Print the total if you were to order one of every drink.

const totalCost = coffeeMenu.reduce((total, drink) => total + drink.price, 0);
console.log(totalCost);


//6. Print an array with all the drinks that are seasonal.

const isSeasonal = (item) => {
  return item.seasonal === true;
}
const seasonalItems = coffeeMenu.filter(isSeasonal);
console.log(seasonalItems);


//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonalDrinksWithImportedBeans = coffeeMenu
  .filter(drink => drink.seasonal === true)
  .map(drink => `${drink.name} with imported beans`);

console.log(seasonalDrinksWithImportedBeans);


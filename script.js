// console.log("hello world");

// console.log(`
//   multiple
//   lines
//   of string
//   here`);

// console.log(typeof 1991, typeof "1991", typeof `1991`);

// 5 falsy values: , '', undefined, null, NaN

// const age = 15;
// const drink = age >= 18 ? "Wine..🍷" : "Water..💧";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "Wine..🍷" : "Water..💧"}`);

// use scrict mode to avoid common errors
// 'use strict';

//function declaration
// function calcAge1(birthYear) {
//   return 2025 - birthYear;
// }
// console.log(calcAge1(1995));

//function expression
// const calcAge2 = function (birthYear) {
//   return 2025 - birthYear;
// };
// const age2 = calcAge2(1995);

//arrow functions
// const calcAge3 = (birthYear) => 2025 - birthYear;
// console.log(calcAge3(1995));

// const yearUntilRetirement = (birthYear, firstname) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   return `${firstname} retires in ${retirement} years`;
// };
// console.log(yearUntilRetirement(1995, "Bob"));

// const friends = ["a", "b", "c"];
// console.log(friends);
// console.log(friends.length);

// friends.push("d");
// console.log(friends);
// console.log(friends.length);

//scope and the scope chain.
//var doesn't have block scope, only have function scope and global scope.
// let and const have block scope as well.

/////////////////////////////////////////
//scoping in practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear > 1995) {
      const a = 10;
      let b = 20;
      var c = 30;

      function add(a, b) {
        return a + b;
      }
    }
    console.log(c); // works bcz var is function scope
    console.log(add(2, 3)); // works (note: functions are block scoped in strict mode, so will not work on strict mode)
    console.log(a); // error bcz const and let are block scope
    console.log(b); // error bcz const and let are block scope
  }
  console.log(add(2, 3)); // error

  printAge();

  return age;
}

const firstName = "Midhun";
calcAge(2000);
*/

/////////////////////////////////////////
// hoisting in practice
/*
console.log(a); // undefined
console.log(b); // error
console.log(c); // error

var a = 10;
const b = 20;
let c = 30;

console.log(add(3, 2)); // works
console.log(addExpr(a, b)); // error for const and let

function add(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

*/

/////////////////////////////////////////
// this keyword
/*
"use strict";

console.log(this); // points to window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //gets undefined
};
calcAge(1995);

const calcAgeArrow = (birthYear) => {
  console.log(2035 - birthYear);
  console.log(this); // gets window as arrow function doesnt get this keyword
};
calcAgeArrow(1995);

const midhun = {
  year: 2000,
  calcAge: function () {
    console.log(this); // gets the midhun object
    console.log(2037 - this.year);
  },
};
midhun.calcAge();

const matilda = {
  year: 2005,
};
matilda.calcAge = midhun.calcAge; // method borrowing
matilda.calcAge();
*/

/////////////////////////////////////////
//object references
/*
const jessica = {
  firstName: "Jessica",
  lastName: "Davis",
  age: "27",
  family: ["Alice", "Bob"],
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis"; // this change will reflect in the original one as the variable jessica is just a reference to the object, not the object itself.

console.log("Before:", jessica);
console.log("After:", marriedJessica);

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Williams"; // this will only change the new and copied one as the spread operator creates a new object with same properties

console.log("Before:", jessica);
console.log("After:", jessicaCopy);

jessicaCopy.family.push("mary"); // this will change all the copies of the object as array is also an object and the family key contains the reference to it.
jessicaCopy.family.push("john");

console.log("Before:", jessica);
console.log("After:", jessicaCopy);

const jessicaClone = structuredClone(jessica); // solves the problem
jessicaClone.family.push("Midhun");
jessicaClone.family.push("Midhun01");

console.log("Org:", jessica);
console.log("Clone:", jessicaClone);
*/

/////////////////////////////////////////
// Destructuring arrays
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [x, y, z] = restaurant.categories; // variables x,y,z gets teh values "Italian", "Pizzeria", "Vegetarian"
console.log(x, y, z);

let [a, b, , c] = restaurant.categories; // third values is skipped
console.log(a, b, c);

[a, b] = [b, a]; // swapping of values
console.log(a, b);

const [starter, main] = restaurant.order(1, 2); //returning two values from a function
console.log(starter, main);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested; // gets 2,5,6 to i,j,k respectively
console.log(i, j, k);

const nestedTwo = [2, 4, [5, 6]];
const [, , [q, w]] = nestedTwo; // gets 5,6 to q,w respectively
console.log(q, w);

[s, d, f] = [1, 2]; // f becomes undefined
console.log(s, d, f);

[v = 0, n = 0, m = 0] = [1, 2]; //variable m gets the deafult value of 0
console.log(v, n, m);

*/

/////////////////////////////////////////
//Destructuring objects
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant.openingHours.thu.open); //output 12

const { name, openingHours, categories } = restaurant; // variables gets the corresponding values
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // if you need diffrent variable names
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant; // if menu is not found will give us an empty array
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c }, //to get custom variable names
} = openingHours;
console.log(o, c);
*/

// destructuring objects: Practical example
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = "22: 00",
    address = "WER TIQ", // if no data passed through function call then default values used
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ time: "10:30" }); // here default values will be used for other properties except for time
*/

/////////////////////////////////////////
// spread operator
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // logs elements individually

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};
const newMenu = [...restaurant.mainMenu, "Cheeseballs"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu]; //copy array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // join 2 arrays
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Midhun";
const letters = [...str, "", "M."];
console.log(letters);
console.log(...str);

//objects
const newRestaurant = { foundedIn: 1998, ...restaurant }; // this will copy restuarant object with the new added properties to newRestuarant
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; // makes a real copy
restaurantCopy.name = "Ristorente Roma"; // the chnage in restaurantCopy will not reflect in resturant
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/////////////////////////////////////////
// Rest pattern
/*
const arr = [1, 2, ...[3, 4]]; // SPREAD, becuase on right side of =

const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST, becuase on left side of =
console.log(a, b, others);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // otherfood gets rest of the items in the array, and REST (...) should always be the last element
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//funtions
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(1, 2, 3, 4);
add(3, 4, 5, 6, 7, 8);

const x = [23, 5, 7];
add(...x);
*/

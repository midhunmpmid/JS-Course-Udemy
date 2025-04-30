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

/////////////////////////////////////////
// Looping arrays: the for of loop
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`); // old school way

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`); // better way
*/

/////////////////////////////////////////
// Working with strings
/*
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));

console.log(airline.slice(-2));

const email = " Hello@midhun.Io \n";
const normalizedEmail = email.toLowerCase().trim();
console.log(normalizedEmail);

console.log("a+very+nice+string".split("+"));
const newName = ["Mr.", "Midhun", "M."].join(" ");
console.log(newName);

const maskCreditCard = function (number) {
  const str = number + ""; // to convert into a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(12345678232));
console.log(maskCreditCard("123456789"));
*/

/////////////////////////////////////////
// A closer look at functions

/*
JavaScript is always pass-by-value. 
However, when dealing with objects, arrays, or functions, 
the value being passed is actually a reference to the object in memory — 
not the object itself. This can feel like pass-by-reference because 
changes made to the object inside a function affect the original object. 
But technically, it’s still pass-by-value 
because what's passed is a copy of the reference.

For primitive types like numbers, strings, and booleans, 
changes made inside a function do not affect the original value — 
because a copy of the actual value is passed.

So in short: JavaScript does not have true pass-by-reference, 
but references to objects can be passed by value.
*/

/*
// callback functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

//functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Midhun");
greeterHey("Steven");

greet("Hello")("Midhun");

//trying the same above with arrow functions

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("HelloArr")("Midhun");

// bind method

const lufthansa = {
  planeCode: "LF45",
};

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector(".btn").addEventListener("click", lufthansa.buyPlane); //in this line, the THIS keayword will point to '.btn'
document
  .querySelector(".btn")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // here problem solved with bind method as we are passing the object reference

// example for bind

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // created an another useful function from the above function

console.log(addVAT(100));
console.log(addVAT(23));

// closure
*/
/*
A closure allows a function to 
access variables from its outer function 
even after the outer function has finished running.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // here the booker function have access to passengerCount variable even after the execution of secureBooking()
booker();
booker();

console.dir(booker);
*/

/////////////////////////////////////////
// Working with arrays
/*
//array methods
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.slice(2)); // doesn't mutate the original array
console.log(arr.slice(2, 5));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.splice(2)); // mutates the original array
console.log(arr.splice(-1));
console.log(arr.splice(2, 2));
console.log(arr);

const arrTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrTwo.reverse()); // mutates teh original array
console.log(arrTwo);

const numbers = arr.concat(arrTwo); // mutates the original array
console.log(numbers);
console.log([...arr, ...arrTwo]); // gives same result without mutating

console.log(arrTwo[0]);
console.log(arrTwo.at(0));
console.log(arrTwo.at(-1)); // usefull for getting the last element as value
*/

// forEach
/*
const transactions = [200, 450, -400, 3000, -650, -130];

for (const transaction of transactions) {
  if (transaction > 0) {
    console.log(`You deposited ${transaction}`);
  } else {
    console.log(`You withdrew ${Math.abs(transaction)}`);
  }
}

console.log("----------forEach----------");

transactions.forEach(function (transaction) {
  if (transaction > 0) {
    console.log(`You deposited ${transaction}`);
  } else {
    console.log(`You withdrew ${Math.abs(transaction)}`);
  }
});

// if we need indexes as counter variables
console.log("----------with index as counter----------");

for (const [i, transaction] of transactions.entries()) {
  // index first (i)
  if (transaction > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${transaction}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(transaction)}`);
  }
}

console.log("----------forEach----------");

transactions.forEach(function (transaction, i) {
  // array element first and then index (it passes array as well)
  if (transaction > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${transaction}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(transaction)}`);
  }
});


// the map method
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * eurToUsd); // creates a new array based on the condition
console.log(movementsUSD);

// filter method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// reduce method
const movements2 = [10, 20, -30, 40];

const balance = movements2.reduce(function (accumulator, cur, i, arr) {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + cur;
}, 0); // accumulator is like a snowball, keeps adding up. the 0 at the end is intial value of the accumulator

console.log(balance);

const balance2 = movements2.reduce((acc, cur) => acc + cur, 0);
console.log(balance2);

// finding max value
const max = movements2.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements2[0]);
console.log(max);

// find method
const firstWithdrawal = movements2.find((mov) => mov < 0); // find method returns the first element which satisfies the provided condition
console.log(movements2);
console.log(firstWithdrawal);

// includes method
console.log(movements2);
console.log(movements2.includes(20)); //equality

// some method
console.log("--------some method---------");
const anyDeposits = movements2.some((mov) => mov > 0); //condition
console.log(anyDeposits); //returns true if any of the element satisfy the condition

// every method
console.log("--------every method---------");
console.log(movements2.every((mov) => mov > 0)); // returns true if all of the array elemets satisfy the condition

//separate callback
const deposit = (mov) => mov > 0;
console.log(movements2.some(deposit));
console.log(movements2.every(deposit));
console.log(movements2.filter(deposit));
*/
/*
// sort method
const movements3 = [-650, -400, -130, 70, 200, 450, 1300, 3000];
console.log(movements3.sort()); // sorting happens as strings

movements3.sort((a, b) => {
  if (a > b) return 1; // switch order
  if (a < b) return -1; //keeps order
});
console.log(movements3);

movements3.sort((a, b) => a - b); // gives you the same result
//we are actually returning the result of a-b, if its positive number it switches order
console.log(movements3);

// array grouping
console.log(movements3);
const groupedMovements = Object.groupBy(movements3, (movement) =>
  movement > 0 ? "deposits" : "withdrawals"
);
console.log(groupedMovements);
*/
/*
// empty arrays + fill method
const x = new Array(7); // will create a new empty array of size 7
console.log(x);
x.fill(1, 3, 5);
console.log(x);

//Array.from
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
*/

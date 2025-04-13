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

// Destructuring arrays

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

// CHALLENGE 1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// CHALLENGE 2

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

//CHALLENGE 3

const scoreDolphins = (96 + 500 + 89) / 3;
const scoreKoalas = (96 + 300 + 89) / 3;

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy..🏆");
else if (scoreDolphins === scoreKoalas) console.log("Both win the trophy..🏆");
else console.log("Koalas win the trophy..🏆");

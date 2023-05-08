// function romanToInt(s) {
//   const romans = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };
//   const numbers = s.split('').map(v => romans[v]);
//   return numbers.reduce((acc, num, index) => num < numbers[index + 1] ?? 0 ? acc - num : acc + num, 0);
// };

// s = "MCMIV";
// console.log(romanToInt(s));

function isValid(a) {
  const array = a.split("");
  console.log(array)
  // for (let i = 0; i < array.length; i += 2) {
  //   const newArr = array.push(array[i]);
  //   return newArr;
  // }


}

const a = "[]{}()";

console.log(isValid(a));

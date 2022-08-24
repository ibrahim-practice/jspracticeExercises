/*
  write a javascript program to find the number of even
  digits in an array of integers
*/
const evendigits = (str) => str.filter((chars) => chars % 2 === 0).length;

console.log(evendigits([1, 3, 58, 12, 25, 38]));

/*
    Write a javascript program to find the number of even
    values up to a given number
*/

const evenNumbers = (str) => {
  let a = [];
  for (let i = 1; i < str; i++) {
    if (i % 2 === 0) {
      a.push(i);
    }
  }
  return a;
};
console.log(evenNumbers(7));
console.log(evenNumbers(17));
console.log(evenNumbers(11));

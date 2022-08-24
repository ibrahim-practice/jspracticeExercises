/*
  write a javascript program to find the number of even
  digits in an array of integers
*/
const evendigits = (str) => str.filter((chars) => chars % 2 === 0).length;

console.log(evendigits([1, 3, 58, 12, 25, 38]));


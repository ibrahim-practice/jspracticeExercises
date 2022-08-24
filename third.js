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


/*
    Write a javaScript program to check whether a given array
    of integers is sorted in ascending order
*/
const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
};

console.log(isAscending([5, 9, 2, 1, 7]));
console.log(isAscending([15, 19, 2, 31, 27]));
console.log(isAscending([1, 2, 5, 9, 11]));
/*
    Write a javascript program to get the largest even 
    number from an array of integers.
*/
const largestNumber = (arr) => {
  let s = arr.sort().reverse();
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] % 2 === 0) {
      return s[i];
    }
  }
};

console.log(largestNumber([15, 19, 2, 31, 27]));
console.log(largestNumber([15, 19, 32, 31, 28]));
console.log(largestNumber([15, 44, 2, 31, 28]));

/*
    Write a javascript program to get the largest even 
    number from an array of integers.
*/
const largestNumber = (arr) => {
  let s = arr.sort().reverse();
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] % 2 === 0) {
      return s[i];
    }
  }
};

console.log(largestNumber([15, 19, 2, 31, 27]));
console.log(largestNumber([15, 19, 32, 31, 28]));
console.log(largestNumber([15, 44, 2, 31, 28]));


// Another Solutions

const largestNumber = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));
console.log(largestNumber([15, 19, 2, 31, 27]));
console.log(largestNumber([15, 19, 32, 31, 28]));
console.log(largestNumber([15, 44, 2, 31, 28]));


/*
    Write a javascript program to replace the first digit 
    in a string( should contain at least digit) with $ 
    character.
*/

const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");

console.log(replaceFirstDigit("qsfhdfh4dfsq8"));

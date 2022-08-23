// Write a JavaScript program to get the extension of a filename.

const getfilename = (str) => str.slice(str.lastIndexOf(".")); 


/*
Write a javascript program to replace every character
in a given string with the character following it in the 
alphabet
*/
// string.fromCharCode
// charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("abcd"));


/*
Write a javascript program to get the current date.

Expected Output:
mm-dd-yy, mm/dd/yyyy, dd-mm-yy or dd/mm/yyyy
*/

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();

  return `${days}/${months}/${years}`;
};
console.log(formatDate());

/*
 Write a javascript program to create a new string adding
 "New!" in front of a given string. If the given begins with
 "New!" already then return the original string.
 */

const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New!${str}`);
console.log(addNew("shuroviv"));
console.log(addNew("New!Year"));

/*
Write a javascript program to create a new string from a 
given string taking the first 3 characters and the last 3 
characters of a string and adding them together. The string 
and adding them together. The string length must be 3 or 
more, if not, the original strign is returned. 
*/
const createString = (str) => {
  if (str.length >= 3) {
    return str.substring(0, 3) + str.substring(str.length - 3);
  }
  return str;
};
console.log(createString("jan"));
console.log(createString("fa"));
console.log(createString("familial"));
// Another solution

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(makeNewString("jan"));
console.log(makeNewString("fa"));
console.log(makeNewString("familial"));

/*
    Write a javaScript program to extract the first half of 
    a strign of even length.
*/

const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf("lllala"));
console.log(firstHalf("shurovi"));
console.log(firstHalf("valobashi"));


/*
    Write a JavaScript program to concatenate two strings
    except their first character.
*/
const concatenater = (str, str2) =>
  str.slice(1, str.length) + str2.slice(1, str2.length);
console.log(concatenater("alal", "adalan"));
console.log(concatenater("aval", "aobashi"));
console.log(concatenater("atom", "aake"));
//Another Solution
const concatenate = (str3, str4) => str3.slice(1) + str4.slice(1);


/*
    Given two values, write a javascript program to find
    out which one is nearst to 100
*/

const nearestToHundred = (a, b) => {
  if (Math.abs(a - 100) < Math.abs(b - 100)) {
    return a;
  } else if (Math.abs(a - 100) > Math.abs(b - 100)) {
    return b;
  } else {
    console.log("Both are same");
  }
};
console.log(nearestToHundred(10, 22));
console.log(nearestToHundred(80, -112));
console.log(nearestToHundred(22, 22));

// Another Solution

const closestTo100 = (a, b) => (100 - a < 100 - b ? a : b);
/*
    Given two values, write a javascript program to find
    out which one is nearst to 100
*/

const nearestToHundred = (a, b) => {
  if (Math.abs(a - 100) < Math.abs(b - 100)) {
    return a;
  } else if (Math.abs(a - 100) > Math.abs(b - 100)) {
    return b;
  } else {
    console.log("Both are same");
  }
};
console.log(nearestToHundred(10, 22));
console.log(nearestToHundred(80, -112));
console.log(nearestToHundred(22, 22));

// Another Solution

const closestTo100 = (a, b) => (100 - a < 100 - b ? a : b);





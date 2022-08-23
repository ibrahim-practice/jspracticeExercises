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

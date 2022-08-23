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

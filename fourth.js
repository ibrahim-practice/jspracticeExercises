
/*
    Write a javaScript program to compare two objects to
    determine if the first one contains the same properties 
    as the second one(which may also have additional 
        properties)
*/

const objectsEqual = (a, b) => Object.keys(a).every((key) => b[key]);

console.log(objectsEqual({ a: 1, b: 2, c: 4 }, { a: 1, b: 2, c: 4 }));
console.log(objectsEqual({ a: 1, b: 2, c: 4 }, { a: 1, b: 2, d: 4 }));
console.log(objectsEqual({ a: 1, b: 2, d: 4 }, { a: 1, b: 2, d: 4 }));

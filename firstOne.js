// Write a javascript program to check two numbers and return
// true if one of the number is 100 or if the sum of the two
// numbers is 100

function sumOfTwoNumbers(number1, number2) {
  if (number1 === 100 || number2 === 100 || number1 + number2 === 100) {
    return true;
  }
  return false;
}

console.log(sumOfTwoNumbers(100, 88));

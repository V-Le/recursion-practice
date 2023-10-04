//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
function sumRange(n) {
  if (n == 1) return 1;
  return n + sumRange(n-1)
}
console.log(sumRange(4));

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(n, e) {
  if (e == 0) return 1;
  return n * power(n, e-1);
}
console.log(power(2, 4));

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n-1);
}
console.log(factorial(3));

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
var numArr = [1,2,9];
var numArrTwo = [2,4,6];
function lets(Arr) {
  if (Arr.length == 0) return "true";
  if (Arr.pop() > 7) { 
    return "false";
  } else return lets(Arr);
}
console.log(lets(numArrTwo))
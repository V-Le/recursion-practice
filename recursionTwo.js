//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(n) {
  if (n == 1) return 1;
  return n + sumRange(n-1)
}
console.log(sumRange(4));
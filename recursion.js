//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

/* 
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
 */

function sumRange(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  console.log(sum)
}

function sumRangeRecursion(n, sum = 0) {
  if (n <= 0) {
    return sum;
  }
  sumRangeRecursion(n-1, sum+n);
}

sumRangeRecursion(3)
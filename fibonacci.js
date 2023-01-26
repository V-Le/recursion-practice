/* Warmup: Fibonacci
The Fibonacci Sequence, which sums each number with the one before it, is a great example of a problem that can be solved recursively.

Assignment 1
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done). */

function fibs(num) {
  let fibArray = [];
  let firstNum = 0;
  let secNum = 1;
  let newNum = 0;

  if (num <= 1) {
    return 0;
  }

  for (let i=0; i <= num-1; i++) {
    fibArray.push(newNum);
    newNum = firstNum + secNum;
    firstNum = secNum;
    secNum = newNum;
  }
  return fibArray;
}

console.log(fibs(8))



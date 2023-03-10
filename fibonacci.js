/* Warmup: Fibonacci
The Fibonacci Sequence, which sums each number with the one before it, is a great example of a problem that can be solved recursively.

Assignment 1
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done). */

/* function fibs(num) {
  let fibArray = [0, 1];

  if (num <= 1) {
    return [0];
  }

  while ( fibArray.length <= num-1) {
    let firstNum = fibArray[fibArray.length-2];
    let secNum = fibArray[fibArray.length-1];
    fibArray.push(firstNum + secNum);
  }
  return fibArray;
} */

/* function fibsRec(num, fibsRecArray = [0,1]) {
  if (num <= 2) {
    return fibsRecArray;
  }
  let firstNum = fibsRecArray[fibsRecArray.length-2];
  let secNum = fibsRecArray[fibsRecArray.length-1];
  fibsRecArray.push(firstNum + secNum);
  
  return fibsRec(num-1, fibsRecArray);
}
console.log(fibsRec(8)); */

function fibsRec(num, fibsRecArray = [0,1]) {
  if (num <= 2) {
    return fibsRecArray;
  }
  fibsRecArray.push(fibsRecArray[fibsRecArray.length-2] + fibsRecArray[fibsRecArray.length-1]);
  
  return fibsRec(num-1, fibsRecArray);
}
console.log(fibsRec(8));


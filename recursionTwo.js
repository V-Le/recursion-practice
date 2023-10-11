// //https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
// // Question 1: Sum all numbers
// // Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// function sumRange(n) {
//   if (n == 1) return 1;
//   return n + sumRange(n-1)
// }
// console.log(sumRange(4));

// // Question 2: Power function
// // Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
// function power(n, e) {
//   if (e == 0) return 1;
//   return n * power(n, e-1);
// }
// console.log(power(2, 4));

// // Question 3: Calculate factorial
// // Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// function factorial(n) {
//   if (n == 1) return 1;
//   return n * factorial(n-1);
// }
// console.log(factorial(3));

// // Question 4: Check all values in an array
// // Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
// // var numArr = [1,2,9];
// // var numArrTwo = [2,4,6];
// // function lets(Arr) {
// //   if (Arr.length == 0) return "true";
// //   if (Arr.pop() > 7) { 
// //     return "false";
// //   } else return lets(Arr);
// // }
// // console.log(lets(numArrTwo))

// var numArr = [1,2,6];
// var allAreLessThanSeven = all(numArr, function(num){
// 	return num < 7;
// });

// function all(array, callback) {
//   var copy = copy || array.slice();
  
//   if (copy.length === 0) return true;
//   if (callback(copy[0])) {
//     var numCheck = copy.shift();
//     return all(copy, callback);
//   } else {
//     return false;
//   }
// }
// console.log(allAreLessThanSeven)

// // Question 6: Search JS object
// // Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// var nestedObject = {
//   num: 144,
//   data: {
//       info: {
//           stuff: {
//               thing: {
//                   moreStuff: {
//                       something: 44,
//                       magicNumber: "food"
//                   }
//               }
//           }
//       }
//   }
// };

// //let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log(contains(nestedObject, 344)); // true

// function contains(obj, val) {
//   for (var key in obj) {
//       if (obj[key] == val) {
//           console.log("num and val");
//           return true;
//       }

//       if (typeof obj[key] == "object") {
//           console.log("NOPE2");
//           return contains(obj[key], val);
//       }
//   }
//   return false;
// }

// // Question 7: Parse a multi-dimensional array
// // Given a multi-dimensional integer array, return the total number of integers stored inside this array
// var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

// function totalIntegers(arr) {
//     let total = 0;
//     if (arr.length === 0) return 0;

//     let first = arr.shift();
//     console.log(first);
//     if (Number.isInteger(first)) {
//         total += 1;
//         console.log(`isInteger: ${first} | Total: ${total}`);
//     } else if (Array.isArray(first)) {
//         console.log(`isArray: ${first}`);
//         total += totalIntegers(first);
//     }
//     return total + totalIntegers(arr);
// }

// // Question 8:
// // Write a function that sums squares of numbers in list that may contain more lists
// console.clear();

// var l = [[1], 2, 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(l)); // 1 = 1

// l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
// function SumSquares(arr) {
//     if (arr.length == 0) return 0;
//     let total = 0;
//     let first = arr.shift();

//     if (Array.isArray(first)) {
//         total += SumSquares(first);
//     } else if (Number.isInteger(first)) {
//         let squareInt = first ** 2;
//         total += squareInt;
//     }
//     return total + SumSquares(arr);
// }
// Use JS Console to Check Value of Variable
let a = 5;
let b = 1;
a++;
console.log(a);

let sumAB = a + b;
console.log(sumAB);

// fCC vs Browser Console
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
console.log(outputTwo);
// Use console.log() to print the outputTwo variable
let outputOne = "Try to get this to log only once to the browser console";
console.clear();
// Use console.clear() in the next line to print the outputOne only once
console.log(outputOne);
// Use console.log() to print the outputOne variable

// Check the Type of a Variable w/ typeof
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// Catch Off By One Errors When Using Indexing
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 0; i < len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}
countToFive();

//  Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
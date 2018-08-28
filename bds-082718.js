// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // change code below this line
return arr.indexOf(elem) === -1 ? false : true;
}
  // change code above this line 
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for(var i = 0; i < arr.length; i++) {
    // if element is not found in array [-1 if not found]
    if(arr[i].indexOf(elem) === -1) { 
      // push element on to end of new array
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Create complex multi-dimensional arrays
let myNestedArray = [
  // Outermost is Level 1
  // Level 2
  ['unshift', false, ['deep', ['deeper', ['deepest'],],], 1, 2, 3, 'complex', 'nested'],
  // change code above this line
];
// Deep = Level 3
// Deeper = Level 4
// Deepest = Level 5

// Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// foods['bananas'] = 13;
foods.bananas = 13;
// foods['grapes'] = 35;
foods.grapes = 35;
// foods['strawberries'] = 27;
foods.strawberries = 27;

console.log(foods);

// Modify an Object Nested Within an Object
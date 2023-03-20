//Array destructuring
// const fruits = ["apple", "grape"]
// let first = fruits[0];
// let second = fruits[1];
// console.log(first);
// console.log(second);

//OR
const fruits = ["apple", "grape"]
let [item1,item2] = fruits; //here two variables created (ittem1, item2) and the value of array (0th,1th index stored in these variables)
item2 = "ankit"
console.log(item1);
console.log(item2);
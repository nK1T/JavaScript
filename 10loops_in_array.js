//for loop in array
// let fruits = ["apple", "mango", "grapes", "banana"]
// for(let i=0;i<fruits.length;i++)
// console.log(fruits[i].toUpperCase())

//example --> create new array and put value of existing array but in uppercase 
// let sub1 = ["maths", "eng", "hindi"]
// let sub2 = [];
// for(let i = 0; i < sub1.length; i++)
// sub2.push(sub1[i].toUpperCase());
// console.log(sub2)


//while loop in array
// const fruits = ["apple", "banana", "grapes"];
// const fruits2 = []
// let i = 0;
// while(i<fruits.length){
//    fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2)


//for of loop
// const fruits = ["apple", "grape", "banana", "mango"]
// const fruits2 = []
// for (let fruit of fruits){
// fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);


//for in loop
const fruits = ["apple", "grape", "banana", "mango"]
const fruits2 = []
for (let fruit in fruits){
fruits2.push(fruits[fruit].toUpperCase());
 }
console.log(fruits2);


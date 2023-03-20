//1.forEach method
// const numbers = [4,3,5,8]

// function index(number, index){
//     console.log(`index is ${index} and number is ${number}`)
//     console.log(`${number}*2 = ${number*2}`)
// }
// // for(let i=0;i<numbers.length;i++){
// //     index(numbers[i], i )
// // }
// numbers.forEach(index);  //foreach works as a for loop


//foreach example
// const users = [
//     {firstname: "ankit", age : 20},
//     {firstname: "mohit", age : 24},
//     {firstname: "sumit", age : 22},
//     {firstname: "jinit", age : 22},
// ]

// users.forEach( user =>{
//     console.log(user.firstname);
// })


//2.map method
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// const numbers = [1,2,3,4,5]

// const square = (number)=>{
//     return number*number;
// }
// const ans = numbers.map(square)
// console.log(ans[0], "index is" , 0);
// console.log(ans[1], "index is" , 1);
// console.log(ans[2], "index is" , 2);
// console.log(ans[3], "index is" , 3);


//3.filter method == The filter() method creates a new array filled with elements that pass a test provided by a function.
//example1
// const age = [18,19,20,22]
// const func = (age)=>{
//     return age>18
// }
// const filtered = age.filter(func)
// console.log(filtered)

//example2
// const numbers = [1,2,3,4,5,6,7,9]
// const iseven = (number)=>{
//     return number%2 == 0
// }
// const isodd = (number)=>{
//     return number%2 != 0
// }
// const even = numbers.filter(iseven)
// console.log("even = " , even)
// const odd = numbers.filter(isodd)
// console.log("odd = " , odd)


//4.reduce method
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// const numbers = [1,2,3,4,5]
// const sum = numbers.reduce((accumulator, currentvalue)=>{
//     return accumulator + currentvalue
// })
// const sub = numbers.reduce((accumulator, currentvalue)=>{
//     return accumulator - currentvalue
// })
// const mul = numbers.reduce((accumulator, currentvalue)=>{
//     return accumulator * currentvalue
// })
// const div = numbers.reduce((accumulator, currentvalue)=>{
//     return accumulator / currentvalue
// })
// console.log(sum)
// console.log(sub)
// console.log(mul)
// console.log(div)

// const mycart = [
//     {product: "mobile", price: 12000},
//     {product: "tv", price: 22000},
//     {product: "laptop", price: 120000},
// ]
// const total = mycart.reduce((totalprice, currentproduct)=>{
//     return totalprice + currentproduct.price
// }, 0)
// console.log(total)


//5.sort method
// const numbers = [2,4,66,2278]
// lowtohigh = numbers.sort((a,b)=>{
//     return a-b; //if a - b is positive then as it is but if a-b is negative then is will replace a to b 
//  });
//  console.log(lowtohigh);
//  hightolow = numbers.sort((a,b)=>{
//      return b-a;
//  });
// console.log(hightolow);
//exmple1
// const products = [
//     {productid : 1, productname : "tv", productprice : 12500},
//     {productid : 2, productname : "pc", productprice : 120000},
//     {productid : 3, productname : "watch", productprice : 2000},
//     {productid : 4, productname : "phone", productprice : 10000},
// ]
// const hightolow = products.sort((a,b)=>{
//     return b.productprice-a.productprice;
// });
// console.log(hightolow);
// const lowtohigh = products.sort((a,b)=>{
//     return a.productprice-b.productprice;
// });
// console.log(lowtohigh);


//6.find method
// const names = ["dog", "horse","cat", "lion" ]
// const ans = names.find((a)=>a.length===5)
// console.log(ans);
//example1
// const users = [
//     {userid: 1, username: "ankit"},
//     {userid: 2, username: "ait"},
//     {userid: 3, username: "akit"},
//     {userid: 4, username: "ankitt"},
// ]
// const sorted = users.find((users)=>users.userid===3)
// console.log(sorted);


//7.every method
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// const ages = [19,20,33,53,23]
// const ans = ages.every((age)=>age>18)
// console.log(ans);
// const users = [
//         {userid: 1, username: "ankit"},
//         {userid: 2, username: "ait"},
//         {userid: 3, username: "akit"},
//         {userid: 4, username: "ankitt"},
//     ]
//     const sorted = users.every((users)=>users.userid<10)
//     console.log(sorted);


//8.some method
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// const numbers = [1,6,7,9,3]
// const ans = numbers.some((number)=>number%2===0)
// console.log(ans);


//9.fill method
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// const myarray = new Array(5).fill(0);
// console.log(myarray);
//EXAMPLE
// const numbers = [2,4,66,2278,45,33,766]
// //(filling value, start, end )
// numbers.fill(0,2,5) //fill 0 from 2nd to (5-1)th index
// console.log(numbers);


//10.splice method
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
//(start, delete, insert)
// const fruits = ["apple", "banana", "grapes", "orange"]
// fruits.splice(2,3); //it removes element present from index 2 to 3
// console.log(fruits);
// fruits.splice(2,3,"horse", "cat"); //it add element in 2 & 3 index
// console.log(fruits);
// fruits.splice(1,0,"lion")
// console.log(fruits);
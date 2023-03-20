//(1)FUNCTION DECLARATION
//EXAMPLE.1
// function sum(x,y){
//     return x +y;
// }
// result1 = sum(13,10);
// result2 = sum(14,10);
// result3 = sum(15,10);
// result4 = sum(16,10);
// result5 = sum(17,10);
// total = result1 + result2 + result3 + result4 + result5 ;
// console.log(total);


//EXAMPLE.2
// function even(x){
//     return x % 2 === 0;
// }
// console.log(even(6));


// EXAMPLE.3
// function string(mystr){
//     return mystr[0];
// }
// console.log(string("hello"));


//EXAMPLE.4
// function find(array, target){
//     for(i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myarray = [2,4,6,8,20]
// const ans = find(myarray, 20);
// console.log(ans);

//(2)FUNCTION EXPRESSION
//EXAMPLE.1
// const sum = function (x,y){
//     return x +y;
// }
// result1 = sum(13,10);
// result2 = sum(14,10);
// result3 = sum(15,10);
// result4 = sum(16,10);
// result5 = sum(17,10);
// total = result1 + result2 + result3 + result4 + result5 ;
// console.log(total);


//EXAMPLE.2
// const even = function (x){
//     return x % 2 === 0;
// }
// console.log(even(6));


// EXAMPLE.3
// const string = function (mystr){
//     return mystr[0];
// }
// console.log(string("hello"));


//EXAMPLE.4
// const find  = function (array, target){
//     for(i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myarray = [2,4,6,8,20]
// const ans = find(myarray, 20);
// console.log(ans);


//(3)ARRROW FUNCTIONS  // ( ) => {}
//EXAMPLE.1
// const sum= (x,y) =>{
//     return x +y;
// }
// result1 = sum(13,10);
// result2 = sum(14,10);
// result3 = sum(15,10);
// result4 = sum(16,10);
// result5 = sum(17,10);
// total = result1 + result2 + result3 + result4 + result5 ;
// console.log(total);


//EXAMPLE.2
// const even = (x)=>{
//     return x % 2 === 0;
// }
// console.log(even(6));


//EXAMPLE.3
// const string = (mystr)=>{
//     return mystr[0];
// }
// console.log(string("hello"));


//EXAMPLE.4
// const find = (array, target) => {
//     for(i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myarray = [2,4,6,8,20]
// const ans = find(myarray, 20);
// console.log(ans);


//FUNCTION SINSIDE FUNCTION
// const mainmenu = ()=>{
//    const  add = (x,y) => x+y;
//    const mul = (x,y)=> x*y;
//    const sum = (x,y)=> x-y;
//    const div = (x,y)=> x/y;
//    console.log(add(5,5)); //we can call function inside function by calling the function inside that funciton
//    console.log(mul(2,4));
// }
// mainmenu();


//DEFAULT PARAMETERS
// const add = (a,b=0)=>{        //we can do (b = 0) if we dont pass the value of b while calling the function then it will default take b = 0 
//    return a+b;
// }
// const sum = add(4);
// console.log(sum);


//REST PARAMETERS
// function myFunc(a,b,...c){
//       console.log(`a is ${a}`);
//       console.log (`b is ${b}`);
//       console.log(`c is ${c}`);
// }
// myFunc(3, 4, 5, 6, 7, 8, 9);
// function add(... numbers) {
// let total = 0;
// for(let number of numbers){
// total = total + number;
// }
// return total;
// }
// const ans = add(4,5,4,2, 10) ;
// console.log(ans) ;


//parameter destructuring
// const person = {
//       firstname  : "ankit",
//       gender : "Male"
// }

// function getdetails({firstname,gender}){
//       console.log(firstname)
//       console.log(gender)
// }

// getdetails(person);


//function  inside function
function first(){
      function second(){
          console.log("hello world")
      }
      return second;
}
const ans = first();
ans();

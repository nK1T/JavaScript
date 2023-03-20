/* Data types in javascript
 There are 2 types of datatypes in javascript
 1. Premitive
    number, string, boolean, null, undefined, symbol
 2. Referrence
    Arrays and objects */

//we can declare datatypes like
//PREMITIVE
//1. NUMBER
var number1 = 33;
var number2 = 66.89;
console.log(number1+number2);

//2. STRING
var str1 = 'this is a string';
var str2 = "This is also a string";
console.log(str1);
console.log(str2);

//3. BOOLEAN
var a = true;
var b = false;
console.log(a);
console.log(b);
console.log(a,b);

//4. UNDEFINED
var und;
console.log(und);

//5. NULL
var a = null;
console.log(a);

//REFERRENCE
//1. ARRAY
var a = [1,2,3,4,50];
console.log(a);
console.log(a[3]); //print value in of index 3rd.

//OBJECT
var marks = {
    ravi : 45,
    shubham : 50.5,
    ankit : 66,
} 
console.log(marks)
console.log(marks.ankit) // to get info about a particular
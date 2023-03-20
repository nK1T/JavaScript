// let mystr = "  ankit             ";
// console.log(mystr.length) //return length of a string
// console.log(mystr.indexOf("boy")) // return index value
// console.log(mystr.slice(0,5)) // n to (n-1) characters
// console.log(mystr.replace("ankit", "sid")) //replace a string to new
// console.log/(mystr.replace("boy", "girl")) //replace a string to new 

// to remove spaces
//example
let str = "      hello       ";
console.log(str.length);

str = str.trim();
console.log(str.length);

console.log(str.toUpperCase()); //make string into uppercase
console.log(str.toLowerCase()); //make string into lowercase

//STRING SLICING
let str2 = str.slice(0,4); //here "0" is start index and "4" is last index it will go  till 3 not 4
console.log(str2);

//string concatenation
let firstname = "Ankit";
let lastname = "Giri"
let fullname = firstname + " " + lastname; // (" ") is added for a space
console.log(fullname);

let age1 = "12"
let age2 = "10"
// let totalage = age1 + age2; //it will print them as string
// console.log(totalage);
let totalage = +age1 + +age2; //by adding "+" in the beginning will convert them into number and then there addition will be print
console.log(totalage);

//String template 
//e.g = my name is "name" and i am "age" year old
let name  = "ankit";
let age = 20;
// let about = "my name is " + name + " and I am " + age + " years old."

//or by using backticks(`)
let about = `my name is ${name} and I am ${age} years old.`; // use(${}) to add variable inside a string 
console.log(about);

// BigInt (it is used when int value increased to max_safe_integer)
let myNumber = BigInt(12) ;
let sameMyNumber = 12n;
console. log (myNumber);
console. log(Number. MAX_SAFE_INTEGER) ;
console.log (myNumber+ sameMyNumber);
 //npte -  we can only add bigint to bigint.
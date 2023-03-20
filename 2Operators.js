//OPERATORS
/*1. ARITHMETIC
var a = 50;
var b = 100;
console.log("The value of a+b is", a+b);
console.log("The value of a-b is", a-b);
console.log("The value of a*b is", a*b);
console.log("The value of a/b is", a/b);*/

/*ASSIGNMENT
var c = b;
//c+=2;
//c-=2;
// c*=2;
// c/=2;
console.log(c)*/

/*ADDING STRING AND OPERATORS
 x = 5+5;
 y = "5" + 5;
 z = "Hello " + 5;
 console.log(x)
 console.log(y)
 console.log(z)*/

/*COMPARISON OPERATOR(==)
x=5
if(x==5) //equal to
if(x!=5) //not equal
if(x>5) //greater than
if(x<5) //less than
if(x<=5) //less than and equal to
if(x>=5) // greater than or equal to
text="HELLO";*/
// (===)
let num1  = 4
let num2 = "4"
console.log(num1==num2); //== only checks the value it doesnt check the date type
console.log(num1===num2); //=== is used to check the date type also
//same goes with != and  !== (it checks datatypes)

/*LOGICAL OPERATOR
x=6;
y=3
if(x<10&&y1) //AND (BOTH TRUE THEN TRUE)
if(x==5||y==5) //OR (EITHER ONE IS TRUE THEN TRUE)
if!(x==y) //NOT
document.write("PRINT")
//AND
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
//OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
//NOT
console.log(!true)
console.log(!false)*/

//TERNARY OPERATOR
//variablename = (condition)? value1(true):value2(false)

let age = 20;
let name = "Ankit"


//convert number to string 22-->"22"
console.log(typeof(age + " ")); //add empty string to it

//convert string to number "name"-->name
console.log(typeof(+'name')); //add "+" before any string
     
                            //or

//number to string
let agee = 21;
agee = String(agee);
console.log(typeof agee);

//number to string
let namee = "ankitt";
namee = Number(namee);
console.log(typeof namee);
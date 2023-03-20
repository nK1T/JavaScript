// Arrays
let fruits = ["apple", "mango","banana"];
console.log(fruits);
fruits[2] = "grapes";
console.log(fruits);

let marks = [12,15,22,34,54];
console.log(marks);

//push--> add new element in the array(in last index)
marks.push("hello");
console.log(marks);

//pop--> removes element from the last index
// fruits.pop();
// console.log(fruits);
//pop also returns the popped value
//e.g.,
let poppedfruit = fruits.pop()
console.log("popped fruit is" , poppedfruit);

//unshift-->it adds the element in the beginning(0th index)
fruits.unshift("myfavtfruit");
fruits.unshift("myfavtfruit2");
console.log(fruits);

//shift-->it removes the element from the start(0th index)
fruits.shift()
console.log(fruits);

//NOTE :- puah and pop is faster than shift and unshift bcx in shift and unshift it has to move each element +1 index before adding and -1 index after deleting

//clone array or concat
let array1 = ["item1", "item2"];
// let array2 = [].concat(array1)
// array2.push("item3")

//by using spread operator(...)
array2 = [...array1]
array2.push("item3")
console.log(array1===array2)
console.log(array1)
console.log(array2)

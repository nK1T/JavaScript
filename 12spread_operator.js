//In array
const array1 = [1,2,3];
const array2 = [5,6,7];

const newarray = [...array1, ...array2 , 9 ,10];
const newarray2 = [..."123456789"];
console.log(newarray);
console.log(newarray2);


//In object
const obj1 = {
    key1 : "value1",
    key2 : "value2",
}
const obj2 = {
    key3 : "value3",
    key4 : "value4",
}

const newobj = {...obj1, ...obj2, key5 : "value5"};
console.log(newobj);
const newobj2 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(newobj2);
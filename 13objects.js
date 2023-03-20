//create object
const person = {
    name : "ankit",
    age : 20,
    hobbies: ["gaming", "music", "coding"]
};
console.log(person);

//access data from objects
console.log(person.name);
//or
console.log(person["name"]); //bracket notation
console.log(person.age);
//or
console.log(person["age"]); //bracket notation
console.log(person.hobbies);
//or
console.log(person["hobbies"]); //bracket notation

//add key value pair to object
person.gender = "male"
//or
person["gender"] = "male"
console.log(person);

//Differnce between dot and bracket notation
//bracket notation is used if the key have more than one word e.g., (person name) we cann not acces this by (person.person name) so in this case we use person["person name"]
const key = "email";
const person1 = {
name: "harshit",
age: 22,
"person hobbies " : ["guitar", "sleeping"]
}
// console. log(person ["person hobbies "]);
person1[key] = "harshitvashisth@gmail.com";
console.log (person1);

//iterate object
//for in loop
for(let key in person1){
    // console.log(`${key} : ${person1[key]}`);
    //or
    console.log(key, " :",  person1[key]);
}

// computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const myobj = {
    [key1] : value1,
    [key2] : value2
}
console.log(myobj);
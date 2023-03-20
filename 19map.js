//in map the type of key can be anything (number,array,string,etc) //but in object only string and symbols
const person = new Map();
person.set('Firstname', 'Ankit');  //set is used to add something in map
person.set('Gender', 'male');
person.set('age', 20);
person.set(12, 'favt no');
// console.log(person);
// console.log(person.get('Firstname'))  //get is used to get the value
// console.log(person.get('Gender'))
// console.log(person.get('age'))
// console.log(person.get(12))
for(let key of person.keys()){
    console.log(key, typeof key)
}
//methods = functions inside object
function personinfo(){
    console.log(`Person name is ${this.firstname} and age is ${this.age}`) //this is a global object
}

const person1 = {
    firstname : "Ankit",
    age : 20,
    about : personinfo
}
const person2 = {
    firstname : "mohit",
    age : 21,
    about : personinfo
}
const person3 = {
    firstname : "sumit",
    age : 17,
    about : personinfo
}
person1.about();
person2.about();
person3.about();
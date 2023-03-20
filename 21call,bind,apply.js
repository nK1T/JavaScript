//1.Call
// With call(), an object can use a method belonging to another object.
// call() method takes arguments separately

// const user1 = {
//     firstname: "ankit",
//     age: 19,
//     about: function personinfo(){
//         console.log(this.firstname, this.age)
//     }
// }
// const user2 = {
//     firstname: "mohit",
//     age: 20,
// }
// user1.about.call(user2);

//or
// function about(hobby,favmusician){
//     console.log(this.firstname, this.age, hobby, favmusician)
// }
// const user1 = {
//     firstname: "ankit",
//     age: 19,
// }
// const user2 = {
//     firstname: "mohit",
//     age: 20,
// }
// about.call(user1, "gaming", "the weeknd");



//2.Apply --> it is same as call
// The apply() method takes arguments as an array.
// function about(hobby,favmusician){
//     console.log(this.firstname, this.age, hobby, favmusician)
// }
// const user1 = {
//     firstname: "ankit",
//     age: 19,
// }
// const user2 = {
//     firstname: "mohit",
//     age: 20,
// }
// about.apply(user1, ["gaming", "the weeknd"]);


//3.Bind
//bind returns a function 
function about(hobby,favmusician){
    console.log(this.firstname, this.age, hobby, favmusician)
}
const user1 = {
    firstname: "ankit",
    age: 19,
}
const user2 = {
    firstname: "mohit",
    age: 20,
}
const myfunc = about.bind(user1, "gaming", "the weeknd");
myfunc();

//create a function to create multiple objets
// const usermethods = {
//     about : function(){
//         return `${this.firstname} is ${this.age} year old.`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }
// function createuser(firstname, lastname,age,email,city){
//     const user = {};
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.age = age;
//     user.email = email;
//     user.city = city;
//     user.about = usermethods.about;
//     user.is18 = usermethods.is18;
//     return user;
// }
// const ankit = createuser('ankit', 'giri', 20, 'ankit@gmail', 'Delhi' );
// const user2 = createuser('mohit', 'giri', 22, 'moit@gmail', 'Delhi' );
// const user3 = createuser('sumit', 'giri', 17, 'sumit@gmail', 'Delhi' );
// console.log(ankit.about());
// console.log(ankit.is18());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user3.about());
// console.log(user3.is18());



//Object.create and proto
// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// }

// const obj2 = Object.create(obj1); //here object.create make a reference of obj1 in obj2 i.e., if the desired value key is not present the obj2 then it will check the obj1 and the get the value from obj1
// obj2.key3 = "value3"
// console.log(obj2.key1);
// console.log(obj2.key2);
// console.log(obj2.__proto__); //proto means the reference that object.create takes from obj1


const usermethods = {
    about : function(){
        return `${this.firstname} is ${this.age} year old.`;
    },
    is18 : function(){
        return this.age>=18;
    },
    sing : function(){
        return "tana na na na na";
    }
}
function createuser(firstname, lastname,age,email,city){
    const user = Object.create(usermethods);
    user.firstname = firstname;
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.city = city;
    return user;
}
const user1 = createuser('ankit', 'giri', 20, 'ankit@gmail', 'Delhi' );
const user2 = createuser('mohit', 'giri', 22, 'moit@gmail', 'Delhi' );
const user3 = createuser('sumit', 'giri', 17, 'sumit@gmail', 'Delhi' );
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
console.log(user2.about());
console.log(user2.is18());
console.log(user2.sing());
console.log(user3.about());
console.log(user3.is18());
console.log(user3.sing());

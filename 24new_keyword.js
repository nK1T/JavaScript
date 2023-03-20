//new keyword
//1. Create empty object = this {}
//2. return {}
//3. new creates a proto which is this

function createuser(firstname, lastname,age,email,city){
    // const user = Object.create(createuser.prototype);
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.city = city;
    return this;
}
createuser.prototype.about = function(){
            return `${this.firstname} is ${this.age} year old.`;
        }
createuser.prototype.is18 = function(){
            return this.age>=18;
        }
createuser.prototype.sing = function(){
    return 'lalalalal';
}        
const user1 = new createuser('ankit', 'giri', 20, 'ankit@gmail', 'Delhi' );
const user2 = new createuser('mohit', 'giri', 22, 'moit@gmail', 'Delhi' );
const user3 = new createuser('sumit', 'giri', 17, 'sumit@gmail', 'Delhi' );
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
console.log(user2.about());
console.log(user2.is18());
console.log(user2.sing());
console.log(user3.about());
console.log(user3.is18());
console.log(user3.sing());

//Class
// class createuser{
//     constructor(firstname, lastname,age,email,city){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.email = email;
//         this.city = city;
//     }
//         about(){
//             return `${this.firstname} is ${this.age} year old.`;
//         }
//         is18(){
//             return this.age>=18;
//         }
//         sing(){
//             return 'lalalalal';
//         }        
//     }      
// const user1 = new createuser('ankit', 'giri', 20, 'ankit@gmail', 'Delhi' );
// const user2 = new createuser('mohit', 'giri', 22, 'moit@gmail', 'Delhi' );
// const user3 = new createuser('sumit', 'giri', 17, 'sumit@gmail', 'Delhi' );
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user2.sing());
// console.log(user3.about());
// console.log(user3.is18());
// console.log(user3.sing());

//example1
// class Animal{
//     constructor(name, age,eats){
//         this.name = name;
//         this.age = age;
//         this.eats = eats;
//     }
//         eat(){
//             return `${this.name} is ${this.age} years old and eats ${this.eats}.`
//         }
//         issupercute(){
//             return this.age<=3;
//         }
// }
// const animal1= new Animal('Cow',2,'grass');
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.issupercute());


//1.Extend
class Animal{
    constructor(name, age,eats){
        this.name = name;
        this.age = age;
        this.eats = eats;
    }
        eat(){
            return `${this.name} is ${this.age} years old and eats ${this.eats}.`
        }
        issupercute(){
            return this.age<=3;
        }
}
// const animal1= new Animal('Cow',2,'grass');
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.issupercute());

// class Dog extends Animal{  //here extends extends the property of Animal for Dog class and Animal is base class and Dog is derived class(subclass)

// }
// const tom = new Dog("tom",2,'milk')
// console.log(tom);
// console.log(tom.eat());
// console.log(tom.issupercute());

//2.Super
class Dog extends Animal{
    constructor(name,age,eat,speed){
        super(name,age,eat); //super keyword helps to get the already declared methods in the base class
        this.speed = speed;
    }
    run(){
        return `${this.name} runs at a speed of ${this.speed}`
    }
}
const tommy = new Dog("tom", 2,'milk', 45);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.run());
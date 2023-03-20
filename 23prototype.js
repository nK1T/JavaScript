// function hello() {
//     console. log("hello world") ;
// }
    // javascript function ==* functionobject
    // console. log (he llo. name);
    // you can add your own propertie5
    // hello. myownProperty = "very unique value ";
    // console. log (hello.myownProperty);
    // name property ---> tells function name;
    // function provides more usefull properties.
    // console. log(hello.prototype); {}
    // only functions provide prototype property

    // const usermethods = {
    //     about : function(){
    //         return `${this.firstname} is ${this.age} year old.`;
    //     },
    //     is18 : function(){
    //         return this.age>=18;
    //     },
    //     sing : function(){
    //         return "tana na na na na";
    //     }
    // }
    // function createuser(firstname, lastname,age,email,city){
    //     const user = Object.create(usermethods);
    //     user.firstname = firstname;
    //     user.lastname = lastname;
    //     user.age = age;
    //     user.email = email;
    //     user.city = city;
    //     return user;
    // }
    // const user1 = createuser('ankit', 'giri', 20, 'ankit@gmail', 'Delhi' );
    // const user2 = createuser('mohit', 'giri', 22, 'moit@gmail', 'Delhi' );
    // const user3 = createuser('sumit', 'giri', 17, 'sumit@gmail', 'Delhi' );
    // console.log(user1.about());
    // console.log(user1.is18());
    // console.log(user1.sing());
    // console.log(user2.about());
    // console.log(user2.is18());
    // console.log(user2.sing());
    // console.log(user3.about());
    // console.log(user3.is18());
    // console.log(user3.sing());
    

    function createuser(firstname, lastname,age,email,city){
        const user = Object.create(createuser.prototype);
        user.firstname = firstname;
        user.lastname = lastname;
        user.age = age;
        user.email = email;
        user.city = city;
        return user;
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
    
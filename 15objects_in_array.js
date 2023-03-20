const users = [
    {userId: 1, Firstname: "ankit", gender: "male"},
    {userId: 2, Firstname: "mohiit", gender: "male"},
    {userId: 3, Firstname: "sumiit", gender: "male"},
]

// for(let user of users){
//     console.log(user.userId);
//     console.log(user.Firstname);
// }

//nested destruturing
const [{Firstname}, user2, {gender : user3gender}] = users;
console.log(Firstname);
console.log(user2);
console.log(user3gender);
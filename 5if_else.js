//conditionals
var age = 19;
/*single if statement
if (age>18)
{
    console.log('you are eligible');
}*/

/*if-else statement
if (age>18)
{
    console.log('you are eligible');
}
else
{
    console.log('you are not eligible');
}*/

//if else ladder
age = 166
if(age>100) 
{
    console.log('You are not eligible');
}
else if(age>18)
{
    console.log('you are eligible');
}
else(age<18)
{
    console.log('you are not eligible');
}
console.log('end');

//example
let num = 18

if (num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}

// falsy values
// false
// null
// undefined
//0
//""

let firstName= 0;
if(firstName){
console.Log(firstName);
}else
console.log("firstName is kinda empty");

//nested if else
// let win = 19
// let userguess = +prompt("Guess a number");

// if (userguess === win){
//     console.log("Your guess is right");
// }
// else{
//     if(userguess>win){
//         console.log("too high");
//     }
//     else{
//         console.log("too low");
//     }
// }

//if else if else
// let temperature = 85
//   if(temperature<0){
//     console.log("It is cold outside");
//   }else if(temperature<16){
//     console.log("Still cold outside");
//   }else if(temperature<25){
//     console.log("Okishh temp");
//   }else if(temperature<36){
//     console.log("It is hot outside");
//   }else{
//     console.log("TURN ON AC");
// }

//switch statement
let day = 44;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
            console.log("INVALID");
}
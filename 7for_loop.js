//for loops

//<--print all number 0 to 9-->
// for(let i = 0; i<=9;i++){
//     console.log(i);
// }

//<--print sum of all natural number 0  to 9-->
// let sum = 0;
// let num = 10;
// for(i = 1; i<=num; i++ ){
//      sum = sum + i;    
// }
// console.log(sum);

//break keyword
// for(let i = 0;i<10;i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

//continue keyword
for(let i = 0;i<10;i++){
    if(i===4){
        continue;    // loop will not print at "4" but still execution of loop will be continue
    }
    console.log(i);
}
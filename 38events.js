//intro to events
//like click,hover,button press,etc
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", ()=>{  //(event, work by doing that event)
//     console.log("YOU CLICKED ME!!!");
// })

//in case of arrow function "this" refers to "window"
//click event on multiple buttons

//for of loop
// const buttons = document.querySelectorAll(".my-buttons button")
// for(let button of buttons){
//     button.addEventListener("click",function(){  //dont use arrow function
//         console.log(this.textContent);
//     })
// }

//or-->normal for loop

// const buttons = document.querySelectorAll(".my-buttons button")
// for(let i=0;i<buttons.length;i++){
//     buttons[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }

//or-->foreach loop

// const buttons = document.querySelectorAll(".my-buttons button")
// buttons.forEach(function(button){
//             button.addEventListener("click",function(){  //dont use arrow function
//                 console.log(this.textContent);
//             })
// })

// PRACTICE
const buttons = document.querySelectorAll(".my-buttons button");
buttons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.target.style.backgroundColor ='yellow'
        e.target.style.Color = '#333'
    })
})
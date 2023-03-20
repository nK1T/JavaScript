//1.select element using element id
// document.getElementById("# ") //enter the id in the brackets. # is for class 



//2.select element using query selector --> with the help of query selctor we can select anyhting
// document.querySelector(". ") //. is for class --> suppose there are many elements having class heading then it will only select the first element having class heading.
// //to overcome this we use-->
// document.querySelectorAll(" ") //It will select all the elements having same class.

//example.1 -->change the style of element
// const mainHeading = document.querySelector("div.headline h2")  //selected h2 which is inside heading class which is inside a div
// mainHeading.style.color = "blue"; //it will change the color of <div.heading h2> to blue
// mainHeading.style.backgroundColor = "grey"; //we cant use background-color insted we use it in camelcase as backgroundColor.

// const mainHeading = document.querySelector("div.form-group password") //selected h2 which is inside heading class which is inside a div
// mainHeading.style.color = "red";



//3.get and set Attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

//4, get elemnt by classname
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection

// simple for loop 
// for(let i=0; i< navItems.length; i++){
    //     // console.log(navItems[i]);
    //     const navItem = navItems[i];
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.color = "green";
    //     navItem.style.fontWeight = "bold";
    
    // }
    
    // for of loop 
    // for(let navItem of navItems){
        //     navItem.style.backgroundColor = "#fff";
        //     navItem.style.color = "green";
        //     navItem.style.fontWeight = "bold";
        // }
        
        // forEach 
    // navItems = Array.from(navItems);
    // console.log(Array.isArray(navItems));
    // navItems.forEach((navItem)=>{
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.color = "green";
    //     navItem.style.fontWeight = "bold";
    // })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

// simple for loop 
// for(let i=0; i< navItems.length; i++){
    //     // console.log(navItems[i]);
    //     const navItem = navItems[i];
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.color = "green";
    //     navItem.style.fontWeight = "bold";
    // }
    
    // for of loop 
    // for(let navItem of navItems){
        //     navItem.style.backgroundColor = "#fff";
        //     navItem.style.color = "green";
        //     navItem.style.fontWeight = "bold";
        // }


// forEach 
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);
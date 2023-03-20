// setTimeout

//example1) 
// console.log("script start");
// setTimeout(function hello(){
//     console.log("hello world")
// }, 5000);
// console.log("script end");

// example2)
// console.log("script start");

// const id = setTimeout(()=>{               //setTimeout returns an id
//     console.log("inside timeout");  //settimeout will be run after all the code is executed the delay time written is the minimum delay that we want
// },0)

// for(let i =0;i<100;i++){
//     console.log("inside loop");
// }

// console.log("script end");
// console.log("id is",id);
// clearTimeout(id);  //clearTime out will not run the setTimeout



// setInterval
console.log("script start");
setInterval(()=>{            //will run a function repeatedly again n again after a interval of time
    console.log((Math.random())*10);
},1000);
console.log("script end");
//promises->it is referred to a value that we don't know now but will get to know in future for sure
// promise status will be in 3 stages 
// 1.pending then it can either be 2.fullfilled or 3.rejected 
const bucket = ['carrot','salt','onion','rice'];

const friedrice = new Promise ((resolve,reject)=>{
    if(bucket.includes("carrot") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("fried rice done")
    }
    else{
        reject("can't do it")
    }
})

friedrice.then(
    //when promise will be done
    (myfriedrice)=>{
        console.log("done",myfriedrice)
    }
    ,
    //when promise will not be completed
    (error)=>{
        console.log("can't",error)
    }
)
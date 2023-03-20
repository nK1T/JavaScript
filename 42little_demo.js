const button = document.querySelector("button");
const body = document.body;
const currentcolor = document.querySelector(".current-color");

function randomcolorgenerator (){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomcolor = `rgb(${red},${green},${blue})`;
    return randomcolor;
}

button.addEventListener("mouseover", ()=>{
    const randomcolor = randomcolorgenerator();
    body.style.backgroundColor = randomcolor;
    currentcolor.textContent = randomcolor;
})
button.addEventListener("mouseleave", ()=>{
    const randomcolor = randomcolorgenerator();
    body.style.backgroundColor = randomcolor;
    currentcolor.textContent = randomcolor;
})
button.addEventListener("click", ()=>{
    body.style.backgroundColor = "black";
    currentcolor.textContent = "black";
})

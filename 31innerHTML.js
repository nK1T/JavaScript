//inner HTML
const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
headline.innerHTML = "<h1> inner HTML changed</h1>"
headline.innerHTML += "<button class = \"btn\"> click to learn more</button>"
console.log(headline.innerHTML);

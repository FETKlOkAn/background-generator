var _ = require('lodash');
console.log(_);

var array = [3,5,7,4,3,1,8];
console.log('answer',_.without(array, 5));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function setGradient(){
    body.style.background="linear-gradient(to right, "+ color1.value+", "+color2.value+")";
    css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
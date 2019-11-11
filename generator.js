var _ = require("lodash");
console.log(_);

let array = [1,2,3,4,5,6,7,8];
console.log(_.without(array, 3));

const leftColor = document.querySelector(".left");
const rightColor = document.querySelector(".right"); 
const body = document.getElementById("gradient");
const h3 = document.querySelector("h3");
let col1 = "red", col2 = "yellow";
let current = "linear-gradient(to right, " + col1 + ", " + col2 + ")";

leftColor.addEventListener("input", () => {
    col1 = leftColor.value;
    changeBackground(col1, col2);

});
rightColor.addEventListener("input", () => {
    col2 = rightColor.value;
    changeBackground(col1, col2);
});

const changeBackground = (left, right) => {
    current = "linear-gradient(to right, " + col1 + ", " + col2 + ")";
    body.style.background = current;
    h3.textContent = current;
}

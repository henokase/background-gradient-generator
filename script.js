let CSS = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");
let randBtn = document.querySelector(".rand-color");

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();
CSS.textContent = body.style.background + ';';

function setGradient(rand1, rand2, rand3, rand4, rand5, rand6, rand7, rand8, rand9, rand10) {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    CSS.textContent = body.style.background + ';';
    randBtn.style.background = `linear-gradient(to right top, ${rand1}, ${rand2}, ${rand3}, ${rand4}, ${rand5}, ${rand6}, ${rand7}, ${rand8}, ${rand9}, ${rand10})`;
}

function setRandomColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    
    let rand1 = getRandomColor();
    let rand2 = getRandomColor();
    let rand3 = getRandomColor();
    let rand4 = getRandomColor();
    let rand5 = getRandomColor();
    let rand6 = getRandomColor();
    let rand7 = getRandomColor();
    let rand8 = getRandomColor();
    let rand9 = getRandomColor();
    let rand10 = getRandomColor();

    setGradient(rand1, rand2, rand3, rand4, rand5, rand6, rand7, rand8, rand9, rand10);
}

function getRandomColor() {
    let hexColorCode = Math.floor(Math.random() * 16777215).toString(16);
    while(hexColorCode.length < 6) {
        hexColorCode = '0' + hexColorCode;
    }
    return '#' + hexColorCode;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);  
randBtn.addEventListener("click", setRandomColor);
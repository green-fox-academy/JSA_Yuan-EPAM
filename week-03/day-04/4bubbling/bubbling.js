// let upButton = document.querySelector("nav > button[data-direction='up']");
// let downButton = document.querySelector("nav > button[data-direction='down']");
// let leftButton = document.querySelector("nav > button[data-direction='left']");
// let rightButton = document.querySelector("nav > button[data-direction='right']");
// let inButton = document.querySelector("nav > button[data-direction='in']");
// let outButton = document.querySelector("nav > button[data-direction='out']");
let navArea = document.querySelectorAll("nav");
let imgInspector = document.querySelector(".img-inspector");

// let buttons = [upButton, downButton, leftButton, rightButton, inButton, outButton];
const buttonAction = [{
    "up" : {"height": -10},
    "down" : {"height" : 10},
    "right" : {"width" : ''}
}];

function checkButton (navArea) {
    for (let button of navArea.children) {
        button.addEventListener("click", (event) => {
            console.log(button);
        })
    }
}

// checkButton(navArea);

let body = document.querySelector("body");
let rightButton = document.querySelector("nav > button[data-direction='right']");

rightButton.addEventListener("click", (event) => {
    imgInspector.style.margin += 100;
    let style = document.querySelector("style").firstChild;
    console.log(style);
    // console.log(imgInspector.style.border);
})

console.log(imgInspector);
console.log(imgInspector.scrollTop);


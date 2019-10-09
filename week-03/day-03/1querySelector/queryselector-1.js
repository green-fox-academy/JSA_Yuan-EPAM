// 1
let king = document.getElementById("b325");
console.log(king);


// 2
let businessmanE = document.getElementsByTagName("p")[0];
let businessman = businessmanE.innerText;

let lamplighterE = document.querySelector(".b329");
let lamplighter = lamplighterE.innerText;

console.log(businessman);
console.log(lamplighter);


// 3
let conceiteKing = document.querySelectorAll("section .asteroid");
for (let node of conceiteKing) {
    // alert(node);
    alert(node.innerText);
}


// 4
let noBusiness = document.getElementsByTagName("div");
for (let node of noBusiness) {
    console.log(node.innerText);
}
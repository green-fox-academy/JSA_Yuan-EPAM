let pE = document.querySelectorAll("p:not(:nth-last-child(2))");
let lastE = document.querySelector("p:nth-last-child(2)");

console.log(lastE.innerHTML);
// 1
function addSuffix1(data, aStr) {
    for (let node of data) {
        node.innerText += aStr + " ";
    }
}

addSuffix1(pE, lastE.innerText);

// 2
function addSuffix2(data, aStr) {
    for (let node of data) {
        node.innerHTML += aStr + " ";
    }
}

addSuffix2(pE, lastE.innerHTML);
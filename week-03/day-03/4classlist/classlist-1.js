let pE = document.getElementsByTagName("p");

console.log(pE[2].classList.contains("cat"));

function replaceText(nodes, target, val) {
    for (let node of nodes) {
        if (node.classList.contains(`${target}`)) {
            node.innerText = val;
        } 
    }
}

function updateContent(data) {
    if (pE.length >= 4) {
        if (pE[3].classList.contains("dolphin")) {
            replaceText(data, "apple", "pear");
        } 
    }
    if (pE.length > 0) {
        if (pE[0].classList.contains("apple")) {
            replaceText(data, "cat", "dog");
        }
    }
}

updateContent(pE);

let apple = document.querySelector(".apple");
apple.setAttribute("class", "red");

let balloon = document.querySelector(".balloon");
balloon.setAttribute("class", "pear");
console.log(balloon);
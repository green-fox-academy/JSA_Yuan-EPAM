// 1
let strs = ["apple", "banana", "cat", "dog"];
let liE = document.querySelectorAll("ul > li");

function replaceContent(data, strs) {
    for (let i = 0; i < strs.length; i++) {
        data[i].innerText = strs[i];
    }
}

replaceContent(liE, strs);

// 2
let ul = document.getElementsByTagName("ul")[0];
ul.setAttribute("class", "red");
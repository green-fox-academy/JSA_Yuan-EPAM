let aList = document.querySelector("ul");

console.log(aList.children.length);

function countItem(target) {
    let button = document.querySelector("button");
    let result = document.querySelector(".result");
    button.addEventListener("click", (event) => {
        result.textContent = target.children.length;
    })
}

countItem(aList);
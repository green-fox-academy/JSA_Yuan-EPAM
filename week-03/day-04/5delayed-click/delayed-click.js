let buttom = document.querySelector("button");

buttom.addEventListener("click", (event) => {
    setTimeout(() => {
        let body = document.querySelector("body");
        let newText = document.createElement("p");
        newText.textContent = "2 seconds ellapsed";
        body.appendChild(newText);
    }, 2000);
})
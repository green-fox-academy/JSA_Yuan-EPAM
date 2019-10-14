let button = document.querySelector("button");
let count = 0;
console.log(button);

button.addEventListener("click", (event) => {
    let temp = false;
    setTimeout(() => {
        console.log("hello?");
        // TODO: Bug!!! Modify 3 times
        if (count === 3) {
            temp = true;
            let p = document.querySelector(".delayedShow");
            p.textContent = "5 seconds elapsed and clicked 3 times";
        }
    }, 5000);

    count += 1;
    console.log(count);
})
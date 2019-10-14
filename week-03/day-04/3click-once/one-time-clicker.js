let count = 0;

function clickOnceTime1(count) {
    let button = document.querySelector("button");
    button.addEventListener("click", (event) => {
        if (count < 1) {
            console.log(event.timeStamp);
        }
        count += 1;
    })
}

function clickOnceTime2(count) {
    // disabled button
    let button = document.querySelector("button");
    button.addEventListener("click", (event) => {
        console.log(event.timeStamp);
        button.disabled = true;
    })
}

clickOnceTime1(count);
clickOnceTime2(count);
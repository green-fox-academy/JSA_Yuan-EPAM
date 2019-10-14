let start = Date.now();

let time = document.querySelector("div p > span");
let button = document.querySelector("div button");

let timeCounter = setTimeout(() => {
    alert("5 seconds passed!");
}, 5000)

function getElapsed(startTime) {
    let curr = Date.now();
    return (curr - startTime) / 1000;
}

function stopMethod1() {
    button.addEventListener("click", () => {
        let elapsed = getElapsed(start);
        if (elapsed < 5) {
            clearTimeout(timeCounter);
            console.log("alert cleared!")
        }
        // time.textContent = elapsed;
    })
}

function stopMethod2(button) {
    let cancelButton = (button) => {
        return new Promise((resolve, reject) => {
            button.addEventListener("click", () => {
                let elapsed = getElapsed(start);
                resolve(elapsed);
            });
        });
    }

    cancelButton(button).then(elapsed => {
        if (elapsed < 5) {
            clearTimeout(timeCounter);
            console.log("alert cleared");
        }
    });
}

async function stopMethod3(button) {
    let cancelButton = (button) => {
        return new Promise((resolve, reject) => {
            button.addEventListener("click", () => {
                let elapsed = getElapsed(start);
                resolve(elapsed);
            });
        });
    }

    let elapsed = await cancelButton(button);
    if (elapsed < 5) {
        clearTimeout(timeCounter);
        console.log("alert cleared!");
    }
}

// stopMethod1();
// stopMethod2(button);
stopMethod3(button);


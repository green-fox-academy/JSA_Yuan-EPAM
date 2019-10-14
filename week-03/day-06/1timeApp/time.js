let start = Date.now();
let datetime = new Date(start);

function setRed(target) {
    target.style.background = "red";
}

function initialize() {
    let timestamp = document.querySelector("div p:nth-child(1) span");
    let timePassed = document.querySelector("div p:nth-child(3) span");
    let button = document.querySelector("button");

    timestamp.textContent = datetime.toString();
    setRed(timestamp);
    setRed(timePassed);

    return { button, timePassed };
}

function showTime1() {
    let { button, timePassed } = initialize();

    button.addEventListener("click", (event) => {
        let end = Date.now();
        let elapsed = (end - start) / 1000;

        timePassed.textContent = elapsed;
    })
}

function showTime2() {
    let { button, timePassed } = initialize();

    let longelyButton = (target) => {
        return new Promise((resolve, rejct) => {
            target.addEventListener("click", () => {
                let end = Date.now();
                let elapsed = (end - start) / 1000;
                
                resolve(elapsed);
            });
        });
    }

    longelyButton(button).then(elapsed => {
        timePassed.textContent = elapsed;
    });           
}

async function showTime3() {
    let { button, timePassed } = initialize();

    let longelyButton = (target) => {
        return new Promise((resolve, rejct) => {
            target.addEventListener("click", () => {
                let end = Date.now();
                let elapsed = (end - start) / 1000;
                // timePassed.textContent = elapsed;
                resolve(elapsed);
            });
        });
    }

    timePassed.textContent = await longelyButton(button);
}

// showTime1();
// showTime2();
showTime3();



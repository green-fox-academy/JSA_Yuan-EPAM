let body = document.getElementsByTagName("body")[0];

body.onclick = () => {
    let button = document.querySelector("div > button");
    button.disabled = !button.disabled;
}
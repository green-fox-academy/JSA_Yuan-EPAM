let test = document.getElementById("test");

test.addEventListener("mouseenter", function(event) {
    event.target.style.color = "red";

    setTimeout(() => {
       event.target.style.color = ""; 
    }, 2000);
}, false);

test.addEventListener("mouseover", function(event) {
    event.target.style.color = "orange";

    setTimeout(() => {
       event.target.style.color = ""; 
    }, 2000);
}, false);
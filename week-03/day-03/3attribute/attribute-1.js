let imageURL = document.getElementsByTagName("img")[0];
imageURL.setAttribute("src", "./doggyLOL.jpeg");

let url = document.getElementsByTagName("a")[0];
url.setAttribute("href", "www.greenfox.com");

let button2 = document.getElementsByTagName("button").item(1);
button2.disabled = true;
button2.innerText = "Don't click me!";

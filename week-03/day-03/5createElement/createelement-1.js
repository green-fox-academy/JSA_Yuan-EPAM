let asteroidList = document.querySelector("ul.asteroids");

let newAsteroid1 = document.createElement("li");
let newAsteroid2 = document.createElement("li");
newAsteroid1.textContent = "The Green Fox";
newAsteroid2.textContent = "The Lamplighter";
asteroidList.appendChild(newAsteroid1);
asteroidList.appendChild(newAsteroid2);

let container = document.querySelector(".container");
let header = document.createElement("p");
let image = document.createElement("img");
image.setAttribute("src", "doggyLOL.jpeg");
header.textContent = "I can add elements to the DOM!"
container.appendChild(header);
container.appendChild(image);

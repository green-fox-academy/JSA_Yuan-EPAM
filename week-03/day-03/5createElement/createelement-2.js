const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];


let asteroidList = document.querySelector("ul.asteroids");
let king = document.querySelector("ul>li");
asteroidList.removeChild(king);

function addData(target, data) {
    for (let node of data) {
        if (node["asteroid"]) {
            let newAsteroid = document.createElement("li");
            newAsteroid.setAttribute("class", node["category"]);
            newAsteroid.textContent = node["content"];
            target.appendChild(newAsteroid);
        }
    }
}

addData(asteroidList, planetData);
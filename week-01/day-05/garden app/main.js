const Flower = require('./flower.js');
const Tree = require('./tree.js');
const Gargen = require('./garden.js');

function initializeGargen() {
    let gargen = new Gargen();
    let plants = [
        new Flower('yellow'), 
        new Flower('blue'),
        new Tree('purple'), 
        new Tree('orange')
    ];
    plants.forEach(plant => {
        gargen.addPlant(plant);
    })
    return gargen;
}

let gargen = initializeGargen();
gargen.checkAllPlantStatus();

gargen.waterAllPlants(40);
gargen.checkAllPlantStatus();

gargen.waterAllPlants(70);
gargen.checkAllPlantStatus();

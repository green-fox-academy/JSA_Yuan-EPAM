class Garden {
    constructor() {
        this.plants = [];
    }

    addPlant(plant) {
        this.plants.push(plant);
    }

    waterPlant(plant, waterAmount) {
        if (plant === undefined) {
            console.log('No plant need to be watered!');
        }
        if (plant.currentStatus) { // only water those needs water 
            if (plant.plantType === 'flower') {
                plant.addWater(waterAmount * 0.75);
            } else if (plant.plantType === 'tree') {
                plant.addWater(waterAmount * 0.4);
            }
            plant.isShortageOfWater();
        }
    }

    waterAllPlants(waterAmount) {
        if (this.plants.length > 0) {
            let waterPerPlant = waterAmount / this.plants.length;
            console.log(`Watering with ${waterAmount}`);
            this.plants.map(plant => {
                this.waterPlant(plant, waterPerPlant);
            })
        } else {
            console.log('No plant to water...');
        }
    }

    plantInfo(plant) {
        let plantStatus = {false : 'doesnt', true : 'need'};
        console.log(`The ${plant.color} ${plant.platnType} ${plantStatus[plant.currentStatus]} water`);
    }

    checkAllPlantStatus() {
        this.plants.map(plant => {
            this.plantInfo(plant);
        })
        console.log();
    }
}


module.exports = Garden;
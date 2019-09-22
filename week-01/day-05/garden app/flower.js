const Plant = require('./plant.js');

class Flower extends Plant {
    constructor(color, waterCapacity) {
        super(color, waterCapacity);
        this.type = 'flower';
    }

    isShortageOfWater() {
        if (this.waterCapacity < 5) {
            this.shortageOfWater = true;
        } else {
            this.shortageOfWater = false;
        }
    }
}

module.exports = Flower;
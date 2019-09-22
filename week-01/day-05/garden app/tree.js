const Plant = require('./plant.js');

class Tree extends Plant {
    constructor(color, waterCapacity) {
        super(color, waterCapacity);
        this.type = 'tree';
    }

    isShortageOfWater() {
        if (this.waterCapacity < 10) {
            this.shortageOfWater = true;
        } else {
            this.shortageOfWater = false;
        }
    }
}

module.exports = Tree;
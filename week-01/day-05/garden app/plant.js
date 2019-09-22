class Plant {
    constructor(color = 'white', waterCapacity = 2) {
        this.type = undefined;
        this.color = color;
        this.waterCapacity = waterCapacity;
        this.shortageOfWater = false;
    }

    addWater(amount) {
        this.waterCapacity += amount;
    }

    get waterLeft() {
        return this.waterCapacity;
    }

    get plantType() {
        return this.type;
    }

    get currentStatus() {
        this.isShortageOfWater();
        return this.shortageOfWater;
    }

    // isShortageOfWater() { 
    // }
}

module.exports = Plant;
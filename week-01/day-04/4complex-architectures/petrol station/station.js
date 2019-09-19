const Car = require('./car.js');

class Station {
    constructor(gasAmount = 10000) {
        this.gasAmount = gasAmount;
    } 

    refill(car) {
        this.gasAmount -= car.capacity;
    }

    getGasAmount() {
        return this.gasAmount;
    }
}

module.exports = Station;
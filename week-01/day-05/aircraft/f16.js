const Aircraft = require('./aircraft.js');

class F16 extends Aircraft {
    constructor(aircraftType = 'F16', ammoNum = 8, maxAmmo = 8, ATK = 30) {
        super(aircraftType, ammoNum, maxAmmo, ATK);
        this.priority = 2;
    }

    isPriority() {
        return false;
    }
}

module.exports = F16;
const Aircraft = require('./aircraft.js');

class F35 extends Aircraft {
    constructor(aircraftType = 'F35', ammoNum = 12, maxAmmo = 12, ATK = 50) {
        super(aircraftType, ammoNum, maxAmmo, ATK);
        this.priority = 1;
    }

    isPriority() {
        return true;
    }
}

module.exports = F35;
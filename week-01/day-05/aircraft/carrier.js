const Aircraft = require('./aircraft.js');

class Carrier {
    constructor(name = '', HP = 5000, carrierType = 'carrier', ammoStorage = 120) {
        this.name = name;
        this.carrierType = carrierType;
        this.HP = HP;
        this.aircrafts = [];
        this.priorityMap = {1 : [], 2: []};
        this.totalATK = 0;
        this.ammoStorage = ammoStorage;
        this.ammoNeed = 0;
    }

    add (aircraft) {
        this.aircrafts.push(aircraft);
        this.priorityMap[aircraft.priority].push(this.aircrafts.length - 1);
        this.ammoNeed += aircraft.ammoSpace;
        this.totalATK += aircraft.allATK;
    }

    checkAmmoNeed(aircrafts) {
        aircrafts.map(aircraft => {
            this.ammoNeed += aircraft.ammoSpace;
        })
    }

    checkAmmoStorage() {
        console.log(`ammo storage: ${this.ammoStorage}`);
        if (this.ammoStorage <= 0) {
            throw "NO AMMO!!!";
        }
    }

    fillAllCrafts(aircrafts, order = false) {
        if (!order) {
            aircrafts.map(aircraft => {
                this.ammoStorage = aircraft.refill(this.ammoStorage);
                this.totalATK += aircraft.damage;
                this.ammoNeed -= aircraft.ammoSpace;
            })
            console.log('Filled Done! No order...\n')
        } else {
            for(let priority in this.priorityMap) {
                for (let idx of this.priorityMap[priority]) {
                    console.log(`refilling idx ${idx}`);
                    // console.log(aircrafts[idx]);
                    this.ammoStorage = aircrafts[idx].refill(this.ammoStorage);
                    this.totalATK += aircrafts.damage;
                    this.ammoNeed -= aircrafts[idx].ammoSpace;
                    this.checkAmmoStorage();
                }
            }
            console.log('Filled Done! ordered...\n');
        }
    }

    fill() {
        this.checkAmmoStorage();
        this.checkAmmoNeed(this.aircrafts);
        console.log(`ammoNeed: ${this.ammoNeed}, ammoStorage: ${this.ammoStorage}`);
        if (this.ammoNeed <= this.ammoStorage) { // adequate ammo for all aircrafts
            this.fillAllCrafts(this.aircrafts);
        } else {
            this.fillAllCrafts(this.aircrafts, true);
        }
        this.ammoNeed = 0;
    }
    
    fight(carrier) {
        this.aircrafts.map(aircraft => {
            this.totalATK -= aircraft.damage;
            carrier.HP -= aircraft.fight();
            aircraft.damage = 0;
        })
    }

    getStatus() {
        console.log(`carrier: ${this.name}, HP: ${this.HP}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total damage: ${this.totalATK}`);
        this.aircrafts.map(aircraft => {
            aircraft.status();
        })
        console.log();
    }

    set hp(hpVal) {
        this.HP -= hpVal;
    }

    get hp() {
        return this.HP;
    }
}

module.exports = Carrier;

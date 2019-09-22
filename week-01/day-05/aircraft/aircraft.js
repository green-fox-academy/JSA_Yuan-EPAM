class Aircrafts {
    constructor(aircraftType, ammoNum, maxAmmo, baseATK = 10) {
        this.aircraftType = aircraftType;
        this.ammoNum = ammoNum;
        this.maxAmmo = maxAmmo;
        this.baseATK = baseATK;
        this.allATK = this.baseATK * this.ammoNum;
        this.priority = undefined;
    }

    fight() {
        this.ammoNum = 0;
        return this.allATK;
    }

    addATK(baseATK, ammoNum) {
        this.allATK = baseATK * ammoNum;
    }

    refill(ammo) {
        if (ammo >= this.ammoSpace) {
            this.ammoNum = this.maxAmmo;
            this.addATK(this.baseATK, this.ammoNum);
            ammo -= this.maxAmmo;
        } else {
            this.ammoNum = ammo;
            this.addATK(this.baseATK, this.ammoNum);
            ammo = 0;
        }
        return ammo;
    }

    status() {
        console.log(`Type: ${this.aircraftType}, Ammo: ${this.ammoNum}, Base Damage: ${this.baseATK}, All Damage: ${this.allATK }`);
    }

    isPriority() {
    }

    set damage(val) {
        this.allATK = 0;
    }

    get checkammo() {
        return this.ammoNum;
    }

    get ammoSpace() {
        return this.maxAmmo - this.ammoNum;
    }

    get type() {
        return this.aircraftType;
    }

    get damage() {
        return this.allATK;
    }

}

module.exports = Aircrafts;
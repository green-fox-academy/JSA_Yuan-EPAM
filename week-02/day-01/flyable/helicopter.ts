import Vehicle from './vehicle';
import Flyalbe from './flyable';

class Helicopter extends Vehicle implements Flyalbe {
    constructor(type: string = "Helicopter") {
        super(type);
    }

    refill(ammo): void {
        this.ammoStorage += ammo;
    }

    land(): void {
        console.log(`${this.type} is landing...`);
    }

    fly(): void {
        console.log(`${this.type} is flying...`);
    }

    takeOff() :void {
        console.log(`${this.type} takeOff, takeOff!`);
    }

}

export default Helicopter;
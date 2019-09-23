abstract class Vehicle {
    public type: string;
    public ammoStorage: number;
    protected maxAmmo: number;


    constructor(type: string, ammoStorage: number = 500, maxAmmo: number = 1000) {
        this.type = type;
        this.ammoStorage = ammoStorage;
        this.maxAmmo = maxAmmo;
    }    

    abstract refill(ammo): void;
}

export default Vehicle;
import Instruments from './instrument';

abstract class StringedInstrument extends Instruments {
    protected numberOfStrings: number;

    constructor(numberOfStrings: number, name: string) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    abstract sound(): string;

    public play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.sound()}`);
    }
}

export default StringedInstrument;

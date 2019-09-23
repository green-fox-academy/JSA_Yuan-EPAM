import StringedInstrument from './stringedInstrument';

class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 6, name: string = "ElectriGuitar") {
        super(numberOfStrings, name);
    }

    sound(): string {
        return "Twang";
    }

    public play(): void {
        super.play();
    }
}

export default ElectricGuitar;
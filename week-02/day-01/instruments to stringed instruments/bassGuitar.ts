import StringedInstrument from './stringedInstrument';

class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4, name: string = "BassGuitar") {
        super(numberOfStrings, name);
    }

    sound(): string {
        return "Duum-dunnm-duum";
    }

    public play() {
        super.play();
    }
}

export default BassGuitar;
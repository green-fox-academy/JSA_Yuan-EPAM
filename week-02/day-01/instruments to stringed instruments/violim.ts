import StringedInstrument from './stringedInstrument';

class Violim extends StringedInstrument {
    constructor(numberOfStrings: number = 4, name: string = 'Violin') {
        super(numberOfStrings, name);
    }

    sound(): string {
        return "Screech";
    }

    public play(): void {
        super.play();
    }
}

export default Violim;
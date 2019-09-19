class DieCorrection {
    constructor(dieSet) {
        this.diceSet = dieSet;
    }

    correctDie() {
        console.log('correcting...');
        let idx = 0
        while (idx < 6) {
            while (this.diceSet.getCurrent(idx) != 6) {
                this.diceSet.reroll(idx);
            }
            idx += 1;
        }
    }
}


module.exports = DieCorrection;
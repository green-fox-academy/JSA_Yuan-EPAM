class Pirate {
    constructor(HP = 100, status = 2) {
        Pirate.ID += 1; 
        this.ID = Pirate.ID;
        this.HP = HP;
        this.drinkTime = 0;
        this.status = status; // 2 : alive, 1 : passed out (sleep off), 0 : dead
    }

    set currentStatus(status) {
        this.status = status;
    }

    set decreaseHP(HPLost) {
        this.HP -= HPLost;
    }

    set id(id) {
        this.ID = id;
    }

    get currentStatus() {
        return this.status;
    }

    get HPLeft() {
        return this.HP;
    }

    get id() {
        return this.id;
    }

    get rumConsumed(){
        return this.drinkTime;
    }

    drinkSomeRum() {
        this.drinkTime += 1;
        if (this.drinkTime >=0 && this.drinkTime <= 4) {
            console.log('Pour me anudder!');
        } else {
            console.log("Arghh, I'm a Pirate. How d'ya d'ink its goin?");
            this.status = 1;
        }
    }

    fight(pirate) {
        if (pirate.status === 2) {
            let result = Math.ceil(Math.random() * 2);
            let target = Math.ceil(Math.random());
            if (result === 1) { // both passed out
                this.status = result;
                pirate.currentStatus = result;
            } else if (result === 0) { // self dead
                this.status = result;
            } else { // other pirate deah
                pirate.currentStatus = 0
            }
        }
    }
}

// Pirate.ID = 0;
// pirateA = new Pirate();
// pirateB = new Pirate();

// pirateA.fight(pirateB);
// console.log(pirateA.currentStatus);
// console.log(pirateB.currentStatus);

module.exports = Pirate;
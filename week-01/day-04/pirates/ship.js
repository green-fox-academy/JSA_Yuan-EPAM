const Pirate = require('./pirate.js');

class Ship {
    constructor(HP = 10000) {
        this.name = 'Black Pearl';
        this.HP = HP;
        this.pirates = [];
        this.captain = undefined;
        this.alivePiratesNum = undefined;
        this.rumStorage = 1000;
    }

    fillShip() {
        let pirateNums = Math.ceil(Math.random() * 4) + 1; // 1 ~ 5 pirates
        Pirate.ID = 0;
        for (let i = 0; i <= pirateNums; i++) {
            this.pirates.push(new Pirate()); 
        }
        this.captain = this.pirates[0]; // set the first aadded pirate as the captain of ship
        this.alivePirates = pirateNums;
    }

    info() {
        let captainStatus = {0 : 'dead', 1 : 'passed out', 2 : 'alive'};
        this.alivePiratesNum = this.pirates.filter(function(pirate) {
            return pirate.currentStatus === 2;
        }).length;
        console.log('--------------------------------------------------------------------')
        console.log(`Captain Rum Consumption: ${this.captain.rumConsumed}, ${captainStatus[this.captain.currentStatus]} !!!, Pirates power: ${this.alivePiratesNum}`);
        console.log('--------------------------------------------------------------------')
    }
}

aShip = new Ship();
aShip.fillShip();
aShip.info();
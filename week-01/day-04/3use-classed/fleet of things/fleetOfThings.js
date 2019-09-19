'use strict';

const Thing = require('./things.js');
const Fleet = require('./fleet.js');

const fleet = new Fleet();

class FleetOfThings {

    constructor() {
        this.fleet = undefined;
    }

    main() {
        this.fleet = new Fleet();
        this.initializaFleet();
    }

    getFleet () {
        return this.fleet;
    }

    initializaFleet() {
        this.fleet.add(new Thing('Get milk'));
        this.fleet.add(new Thing('Remove the obstacles'));
        this.fleet.add(new Thing('Stand up'));
        this.fleet.add(new Thing('Eat lunch'));
    }

    print() {
        let things = this.fleet.getThings();
        things.forEach(function(thing, i) {
            i += 1
            if (thing.completed) {
                console.log(`${i}. [x] ${thing.name}`);
            } else {
                console.log(`${i}. [ ] ${thing.name}`);
            }
        })
    }
}


let fleetOfThings = new FleetOfThings();
fleetOfThings.main();
fleetOfThings.getFleet().getThings()[2].complete()
fleetOfThings.getFleet().getThings()[3].complete()
fleetOfThings.print();




// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:



// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
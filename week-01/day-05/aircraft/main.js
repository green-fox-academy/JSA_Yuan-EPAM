const F16 = require('./f16.js');
const F35 = require('./f35.js');
const Carrier = require('./carrier.js');

function initialization(name) {
    let carrier = new Carrier(name);

    let aircrafts = [
        new F35(), new F16(), new F35(), new F35(),
        new F16()
    ];

    aircrafts.map(aircraft => {
        carrier.add(aircraft);
    });

    return carrier;
}

function atack(carrierA, enemies) {
    console.log('-------------- Current status carrier A:');
    carrierA.getStatus();

    enemies.map(carrier => {
      while (carrier.hp > 0) {
          console.log(`<<< carrier ${carrierA.name} attacks ${carrier.name} >>>`);
          carrierA.fight(carrier);

          carrierA.getStatus();
          carrier.getStatus();

          carrierA.fill();
      } 
    })
}

let carrierA = initialization('A');
let carrierB = initialization('B');
let carrierC = initialization('C');
let carrierD = initialization('D');

let enemies = [carrierB, carrierC, carrierD];

atack(carrierA, enemies);
const Car = require('./car.js');
const Station = require('./station');

let aCar = new Car();
let aStation = new Station();

aStation.refill(aCar);

console.log(aStation.getGasAmount());
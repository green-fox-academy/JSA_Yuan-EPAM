const Garden = require('./ES5Garden.js');

function PlayGround (width, length) {
    Garden.call(this, width, length);
    this.toys = [];
}

PlayGround.prototype = Object.create(Garden.prototype);
PlayGround.prototype.constructor = PlayGround;
PlayGround.prototype.add = function(toy) {
    this.toys.push(toy);
}

var playground = new PlayGround(3, 5);
playground.add('new toy');

console.log(playground.toys);
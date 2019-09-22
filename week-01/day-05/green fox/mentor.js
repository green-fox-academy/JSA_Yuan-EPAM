const Person = require('./person.js');

class Mentor extends Person{
    constructor(name, age, gender, level = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }

    getGoal() {
        console.log('My goal is: Educate brilliant junior software develoopers.');
    }

    introduct() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} ${this.level} mentor`);
    }
}

module.exports = Mentor;

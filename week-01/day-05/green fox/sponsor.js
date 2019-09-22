const Person = require('./person');

class Sponsor extends Person {
    constructor(name, age, gender, company = 'Google', hiredStudents = '0') {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    introduct() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    hire() {
        this.hiredStudents += 1;
    }

    getGoal() {
        console.log('My goal is: Hire brilliant junior software developers.');
    }
}

module.exports = Sponsor;
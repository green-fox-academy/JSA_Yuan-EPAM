const Person = require('./person.js');

class Student extends Person {
    constructor(name, age, gender, previousOrganization = 'The School of Life', skippedDays = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = undefined;
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.');
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    skipDays(numberOfDays) {
        this.skippedDays += numberOfDays;
    }
}

module.exports = Student;

// aStudnet = new Student();
// console.log(aStudnet);


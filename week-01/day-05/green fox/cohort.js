const Student = require('./student.js');
const Mentor = require('./mentor.js');

class Cohort {
    constructor(name = '') {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addMentor(mentor) {
        this.mentors.push(mentor);
    }

    info() {
        console.log(`The ${this.name} cohort has ${this.students.size} studnets and ${this.mentors.size} mentors`);
    }
}

module.exports = Cohort;
const Teacher = require('./teacher.js.js');

class Student {
    learn() {
        console.log('Student is learning something new');
    }

    question(teacher) {
        teacher.answer();
    }
}

module.exports = Student;
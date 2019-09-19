const Student = require('./student.js.js');

class Teacher {
    teach(student) {
        student.learn();
    }

    answer() {
        console.log('Teacher is answering a question');
    }
}


module.exports = Teacher;
class Person{
    protected name: string;
    protected gender: string;

    constructor(name = 'John Snow', gender = 'male') {
        this.name = name;
        this.gender = gender;
    }

    info() {
        console.log(`Name: ${this.name}, gender: ${this.gender}...`);
    }
}

export default Person;
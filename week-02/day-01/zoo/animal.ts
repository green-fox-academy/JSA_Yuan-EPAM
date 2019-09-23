abstract class Animal {
    protected name: string;
    protected age: number;
    protected gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public getName(): string {
        return this.name;
    }

    abstract breed(): void;
    abstract run(): void;
    abstract dance(animal: Animal): void;
    abstract sleep(): void;

}

export default Animal;
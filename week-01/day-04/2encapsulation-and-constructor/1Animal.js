class Animal {
    constructor(hunger = 50, thirst = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat() {
        this.hunger -= 1;
    }

    drink() {
        this.thirst -= 1;
    }

    play() {
       this.hunger += 1;
       this.thirst += 1; 
    }
}

animal1 = new Animal();
animal1.eat();
animal1.drink();
console.log(animal1);
animal1.play();
console.log(animal1);
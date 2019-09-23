import Animal from '../zoo/animal';
import Flyable from './flyable';

class Bird extends Animal implements Flyable{
    constructor(name: string = "Bird", age: number = 3, gender: string = "male") {
        super(name, age, gender);
    }

    land(): void {
        console.log(`${this.name} never land!`);
    }

    fly(): void {
        console.log(`${this.name} is flying~ ~ ~`);
    }

    takeOff(): void {
        console.log(`${this.name} takeoff`);
    }

    breed(): void {
        console.log("who could give me some food, pls...?");
    }

    run(): void {
        console.log(`Run! ${this.name}! Run!!`);
    }

    dance(bird: Bird): void {
        let girlＯrBoy = {'male': 'her boyfried', 'female' : 'his girfried'};
        console.log(`${this.name} is dancing with ${girlＯrBoy[this.gender]}`);
    }

    sleep(): void {
        console.log(`${this.name} m... sleep alone~`);
    }
}

export default Bird;
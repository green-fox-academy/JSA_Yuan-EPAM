import Queue from './queue';

class ArrayQueue implements Queue {
    elements: Object[];

    constructor() {
        this.elements = [];
    }

    empty(): boolean {
        return this.elements.length === 0;
    }

    peek(): string {
        if (this.empty()) {
            throw "Ｅmpty queue!!!";
        } else {
            return String(this.elements[0]);
        }
    }

    add(value: string) {
        return this.elements.push(value);
    }

    remove(): string {
        if (this.empty()) {
            throw "Empty queue!!!";
        } else {
            return String(this.elements.shift());
        }
    }
}
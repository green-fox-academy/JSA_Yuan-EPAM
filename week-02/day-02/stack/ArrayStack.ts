import Stack from './stack';

class ArrayStack implements Stack{
    elements: Object[];

    constructor() {
        this.elements = [];
    }

    empty(): boolean {
        return this.elements.length === 0;
    }

    peek(): string {
        if (this.empty()) {
            throw "Empty stack!!!";
        } else {
            return String(this.elements[this.elements.length - 1]);
        }
    }

    push(value: string): void {
        this.elements.push(value);
    }

    pop(): string {
        if (this.empty()) {
            throw "Empty stack!!!";
        } else {
            return String(this.elements.pop());
        }
    }
}

export default ArrayStack;

import NodeDIY from '../nodeDIY';
import ArrayStack from '../stack/ArrayStack';
import Queue from './queue';

class StackQueue implements Queue {
    fStack: ArrayStack;
    bStack: ArrayStack;

    constructor() {
        this.fStack = new ArrayStack();
        this.bStack = new ArrayStack();
    }

    empty(): boolean {
        return this.fStack.empty();
    }

    peek(): string {
        return this.fStack.peek();
    }

    add(value: string): void {
        while(!this.fStack.empty()) {
            this.bStack.push(this.fStack.pop());
        }
        this.fStack.push(value);

        while(!this.bStack.empty()) {
            this.fStack.push(this.bStack.pop());
        }
    }

    remove(): string {
        return this.fStack.pop();
    }
}

export default StackQueue;


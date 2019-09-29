import NodeDIY from '../nodeDIY';
import Stack from './stack';

class LinkedStack implements Stack {
    head : NodeDIY | null;
    len: number;

    constructor() {
        this.head = null;
        this.len = 0;
    }

    empty(): boolean {
        return this.len === 0;
    }

    peek(): string {
        if (this.empty()) {
            throw "Empty linked stack!!!";
        }
        let curr: NodeDIY = this.head;
        let currIdx: number = 0;
        while (currIdx < this.len) {
            curr = curr.next;
        }
        return curr.element;
    }

    push(value: string): void {
        let node: NodeDIY = new NodeDIY(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let curr: NodeDIY = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.len += 1;
    }
    
    pop(): string {
        if (this.empty()) {
            throw "Empty linked stack!!!";
        }
        let currIdx: number = 0;
        let curr: NodeDIY = this.head;
        let prev: NodeDIY = null;
        while (currIdx < this.len) {
            prev = curr;
            curr = curr.next;
            currIdx += 1;
        }
        prev.next = curr.next;
        this.len -= 1;
        return curr.element;
    }
}

export default LinkedStack;
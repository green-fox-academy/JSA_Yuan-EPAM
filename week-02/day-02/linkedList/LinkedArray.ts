import NodeDIY from '../nodeDIY';
import LinkedList from './LinkedList';

class LinkedArray implements LinkedList {
    head: NodeDIY | null; // head of linked array
    len: number; // length of linked array

    constructor() {
        this.head = null;
        this.len = 0;
    }

    add(value: string, index?: number): void {
        let node: NodeDIY = new NodeDIY(value);
        if (this.head == null) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.len += 1;
    }

    get(index: number): string {
        let currIdx: number = 0;
        let curr: NodeDIY = this.head;
        while(currIdx < index) {
            curr = curr.next;
            currIdx += 1;
        }
        return curr.element;
    }

    removeItem(value: string): void {
        let curr: NodeDIY = this.head;
        let prev: NodeDIY = null;

        while (curr != null) {
            if (curr.element === value) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.len -= 1;
                console.log(`Item ${value} removed`);
            }
            prev = curr;
            curr = curr.next;
        }
        console.log(`Cannot find ${value}`);
    }

    remove(index: number): string {
        if ((index > 0) && (index > this.len)) {
            throw "Index out of range!"
        }
        let currIdx: number = 0;
        let curr: NodeDIY = this.head;
        let prev: NodeDIY = null;

        if (index === 0) {
            this.head = curr.next;
        } else {
            while (currIdx < index) {
                prev = curr;
                curr = curr.next;
                currIdx += 1;
            }
            prev.next = curr.next;
        }
        this.len -= 1;
        
        return curr.element;
    }

    size(): number {
        return this.len;
    }
}

export default LinkedArray;
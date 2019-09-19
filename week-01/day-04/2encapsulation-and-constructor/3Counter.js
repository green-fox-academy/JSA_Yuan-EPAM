class Counter {


    constructor() {
        // this.counter = 0;
        Counter.counter += 1;
    }

    add(num) {
        Counter.counter += num;
    }

    add() {
        Counter.counter += 1;
    }

    get() {
        return Counter.counter;
    }

    reset() {
        Counter.counter = 0;
    }
}


Counter.counter = 0;
aCounter = new Counter();

aCounter.add(5);
console.log(aCounter.get());

aCounter.add();
console.log(aCounter.get());

aCounter2 = new Counter();
console.log(aCounter2.get());

aCounter.reset()
console.log(aCounter.get());
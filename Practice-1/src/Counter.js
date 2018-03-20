class Counter {
    constructor() {
        this.counter = 0;
    }
    // Getter
    get getCount() {
        return this.counter;
    }

    // Method
    increase() {
        this.counter++;
    }
}

export default Counter;

"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const numberQueue = new Queue();
numberQueue.push(0);
numberQueue.push(1);
const stringQueue = new Queue();
stringQueue.push('hi');
stringQueue.push('ts');
//# sourceMappingURL=generic.js.map
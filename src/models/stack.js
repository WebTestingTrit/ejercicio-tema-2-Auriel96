exports.Stack = class Stack {
    constructor() {
        this.contents = [];
        this.top = 0;
    }
    size() {
        return this.contents.length;
    }
    push(elementToPush) {
        this.contents[this.top] = elementToPush;
        this.top++;
    }
    pop() {
        if (this.isEmpty()) {
            throw 'Empty stack';
        }
        this.top--;
        return this.contents.pop();
    }
    isEmpty() {
        return this.size() === 0;
    }
}
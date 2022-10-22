class Stringer {
    constructor(text, length) {
        this.innerString = text;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        if (this.innerLength - value < 0) {
            this.innerLength = 0;
            return;
        }
        this.innerLength -= value;
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`;
        }
        if (this.innerLength == 0) {
            return "...";
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString());

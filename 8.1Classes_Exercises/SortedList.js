class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(number) {
        this.list.push(number);
        this.size = this.list.length;
        this.sortList();
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new RangeError("Index out of range");
        }
        this.list.splice(index, 1);
        this.size = this.list.length;
        this.sortList();
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new RangeError("Index out of range");
        }
        return this.list[index];
    }

    sortList() {
        this.list.sort((a, b) => a - b);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list);

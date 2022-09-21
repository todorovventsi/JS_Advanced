function createSortedList() {
  let result = {
    collection: [],
    size() {
      return this.collection.length;
    },
    add(num) {
      this.collection.push(num);
      this.collection.sort((x, y) => x - y);
    },
    remove(index) {
      this.collection.splice(index, 1);
    },
    get(index) {
      return this.collection[index];
    },
  };
  return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size());

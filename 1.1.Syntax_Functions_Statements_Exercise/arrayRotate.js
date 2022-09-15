function arrayRotate(collection, rotationNumber) {
  for (i = 0; i < rotationNumber; i++) {
    collection.unshift(collection.pop());
  }

  console.log(collection.join(" "));
}

arrayRotate(["Banana", "Orange", "Coconut", "Apple"], 15);

function findBiggest(data) {
  let biggestNumber = Number.MIN_VALUE;
  if (data.length > 0) {
    for (let row of data) {
      for (let number of row) {
        if (number > biggestNumber) {
          biggestNumber = number;
        }
      }
    }

    return biggestNumber;
  }
  return 0;
}

output = findBiggest([5, 1, 2]);

console.log(output);

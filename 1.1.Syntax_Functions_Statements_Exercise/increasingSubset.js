function makeIncreasing(collection) {
  let result;

  result = collection.reduce(
    (acc, currentNumber) => {
      let previous = acc[acc.length - 1];
      if (previous < currentNumber) {
        acc.push(currentNumber);
      }
      return acc;
    },
    [collection[0]]
  );

  return result;
}

makeIncreasing([12]);

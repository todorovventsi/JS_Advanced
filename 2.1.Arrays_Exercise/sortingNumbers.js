function sortingNumbers(data) {
  let sortedNumbers = data.sort((x, y) => x - y);
  let result = [];
  numbersLength = data.length;

  for (let i = 0; i < numbersLength / 2; i++) {
    result.push(sortedNumbers.shift());
    result.push(sortedNumbers.pop());
  }

  return result;
}

output = sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

console.log(output);

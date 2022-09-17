function lastKNumbers(n, k) {
  let result = [1];

  for (let i = 1; i < n; i++) {
    let nextNumber =
      result.length <= k
        ? result.reduce((x, y) => x + y)
        : result.slice(i - k, i).reduce((x, y) => x + y);
    result.push(nextNumber);
  }

  return result;
}

output = lastKNumbers(8, 2);
console.log(output);

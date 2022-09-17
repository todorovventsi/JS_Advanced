function processOdds(data) {
  let result = data.filter((x, index) => index % 2 !== 0).map((x) => x * 2);
  return result.reverse();
}

output = processOdds([10, 15, 20, 25]);
console.log(output);

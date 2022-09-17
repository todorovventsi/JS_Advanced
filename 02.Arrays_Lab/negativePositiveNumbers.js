function solve(data) {
  let result = [];
  data.forEach((number) =>
    number < 0 ? result.unshift(number) : result.push(number)
  );

  result.forEach((number) => console.log(number));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);

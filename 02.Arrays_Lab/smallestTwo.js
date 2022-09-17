function smallestTwo(data) {
  let result = data
    .sort((x, y) => x - y)
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 2);

  console.log(result.join(" "));
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);
smallestTwo([1, 1, 1, 1]);

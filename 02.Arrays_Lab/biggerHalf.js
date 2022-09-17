function biggerHalf(data) {
  data.sort((x, y) => x - y);
  result = data.slice(Math.floor(data.length / 2));
  return result;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);
biggerHalf([4, 7, 2, 5]);

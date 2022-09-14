function squareOfStars(size = 5) {
  let symbol = "* ";
  for (i = 0; i < size; i++) {
    console.log(symbol.repeat(size));
  }
}

squareOfStars();

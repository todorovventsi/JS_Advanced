function checkSimilarity(number) {
  let numberAreSame = true;
  let numberArray = number.toString().split("").map(Number);

  let totalSum = numberArray.reduce((x, y) => x + y);
  numberArray.reduce((x, y) => {
    if (x !== y) {
      numberAreSame = false;
    }
    return x;
  });

  console.log(numberAreSame);
  console.log(totalSum);
}

checkSimilarity(2223);

function findGCD(firstNumber, secondNumber) {
  let smallest = Math.min(firstNumber, secondNumber);
  let gcd = smallest;

  while (true) {
    if (firstNumber % gcd === 0 && smallest % gcd == 0) {
      break;
    }
    gcd -= 1;
  }
  if (gcd > 0) {
    console.log(gcd);
  }
}

findGCD(2154, 458);

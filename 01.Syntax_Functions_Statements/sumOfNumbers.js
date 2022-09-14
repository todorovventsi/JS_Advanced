function sumOfNumbers(firstNum, secondNum) {
  let result = 0;

  for (i = Number(firstNum); i <= Number(secondNum); i++) {
    result += i;
  }

  console.log(result);
}

sumOfNumbers("1", "5");

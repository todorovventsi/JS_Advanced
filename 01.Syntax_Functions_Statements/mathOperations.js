function mathOperations(firstNum, secondNum, operator) {
  let result;
  result = eval(firstNum + operator + secondNum);
  console.log(result);
}

mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");

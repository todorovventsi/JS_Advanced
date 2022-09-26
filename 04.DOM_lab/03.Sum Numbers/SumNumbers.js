function calc() {
  // TODO: sum = num1 + num2
  let firstNum = Number(document.getElementById("num1").value);
  let secondNum = Number(document.getElementById("num2").value);
  let output = document.getElementById("sum");

  output.value = firstNum + secondNum;
}

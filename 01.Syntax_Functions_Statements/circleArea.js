function circleArea(input) {
  let inputType = typeof input;
  let circleArea;

  if (inputType != "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`
    );
    return;
  }

  circleArea = Math.PI * input ** 2;
  console.log(circleArea.toFixed(2));
}

circleArea(5);
circleArea("name");

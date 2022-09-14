function stringLength(...params) {
  let stringLength = 0;

  for (i = 0; i < params.length; i++) {
    stringLength += params[i].length;
  }

  console.log(stringLength);
  console.log(Math.floor(stringLength / params.length));
}

stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");

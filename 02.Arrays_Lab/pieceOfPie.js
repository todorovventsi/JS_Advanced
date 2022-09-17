function pieceOfPie(data, startPie, endPie) {
  startIndex = data.indexOf(startPie);
  endIndex = data.indexOf(endPie);

  let result = data.slice(startIndex, endIndex + 1);
  return result;
}

output = pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);

console.log(output);

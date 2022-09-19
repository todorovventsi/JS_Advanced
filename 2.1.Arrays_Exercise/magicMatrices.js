function magicMatrices(data) {
  isMagic = true;
  let value = data[0].reduce((x, y) => x + y);

  for (let row = 0; row < data.length; row++) {
    let rowValue = data[row].reduce((x, y) => x + y);
    let colValue = 0;
    for (let col = 0; col < data.length; col++) {
      colValue += data[col][row];
    }
    if (rowValue !== value || colValue !== value) {
      isMagic = false;
      break;
    }
    // data[i][i]
    // data[i + 1][i]
    // data[i + 2][i]

    // 0,0  0,1 0,2
    // 1,0  1,1 1,2
    // 2,0  2,1 2,2
  }

  return isMagic;
}

output = magicMatrices([
  [
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ],
]);

console.log(output);

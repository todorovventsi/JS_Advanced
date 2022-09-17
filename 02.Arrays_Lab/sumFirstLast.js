function sumFirstLast(data) {
  numericData = data.map(Number);
  let result = numericData.shift() + numericData.pop();
  return result;
}

let output = sumFirstLast(["20", "30", "40"]);
console.log(output);

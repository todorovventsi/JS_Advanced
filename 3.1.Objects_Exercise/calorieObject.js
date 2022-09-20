function printCaloriesObject(data) {
  let result = {};
  let props = [];
  let values = [];

  for (let [index, value] of data.entries()) {
    if (index % 2 === 0) {
      props.push(value);
      continue;
    }
    values.push(value);
  }

  for (let prop of props) {
    result[prop] = Number(values.shift());
  }

  return result;
}

printCaloriesObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

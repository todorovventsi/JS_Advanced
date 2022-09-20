function transform(data) {
  let result = [];
  let props = clearData(data.shift().split(" | "));

  function clearData(collection) {
    let result = [];
    for (let item of collection) {
      let temp = item.replace("| ", "");
      let final = temp.replace(" |", "");
      result.push(final);
    }
    return result;
  }

  for (let dataSet of data) {
    let [Town, Latitude, Longitude] = clearData(dataSet.split(" | "));
    Latitude = Number(Number(Latitude).toFixed(2));
    Longitude = Number(Number(Longitude).toFixed(2));

    result.push({ Town, Latitude, Longitude });
  }

  return JSON.stringify(result);
}

let data = [
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
];

console.log(transform(data));

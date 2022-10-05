function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function area() {
  return Math.abs(this.x * this.y);
}

input = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

function solve(area, vol, input) {
  data = JSON.parse(input);

  function calc(obj) {
    areaRes = Math.abs(area.call(obj));
    volumeRes = Math.abs(vol.call(obj));

    return { area: areaRes, volume: volumeRes };
  }

  return data.map(calc);
}

result = solve(area, vol, input);
console.log(JSON.stringify(result));

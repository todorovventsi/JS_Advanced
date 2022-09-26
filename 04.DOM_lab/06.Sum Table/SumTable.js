function sumTable() {
  let sumValues = Array.from(
    document.querySelectorAll("table tr td:nth-child(2n)")
  )
    .slice(0, -1)
    .map((item) => Number(item.textContent));
  let totalCell = document.getElementById("sum");

  totalCell.textContent = sumValues.reduce((x, y) => x + y);
}

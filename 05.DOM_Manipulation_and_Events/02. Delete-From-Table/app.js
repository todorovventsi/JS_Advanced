function deleteByEmail() {
  let searchFieldRef = document.querySelector("input[name=email]");
  let dataSet = [...document.querySelectorAll("tbody tr td:nth-child(2)")];
  let matchedData = dataSet.filter(
    (cell) => cell.textContent === searchFieldRef.value
  );
  let userMessage = "Not found.";

  for (let dataCell of matchedData) {
    let parrant = dataCell.parentElement;
    parrant.remove();
    userMessage = "Deleted";
  }

  document.getElementById("result").textContent = userMessage;
}

function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    //  extract the target rows in the table
    let rowsData = Array.from(document.querySelectorAll(".container tbody tr"));
    console.log(rowsData);

    //  clear if rows have any classes
    rowsData.forEach((row) => row.removeAttribute("class"));

    //  extract the search pattern
    let searchFieldRef = document.getElementById("searchField");
    let searchPatternValue = document.getElementById("searchField").value;

    //  for each row check if any cells matches the pattern
    for (let row of rowsData) {
      let isMatched = false;
      let dataSet = Array.from(row.getElementsByTagName("td"));
      for (let value of dataSet) {
        let content = value.textContent;
        if (value.textContent.match(searchPatternValue)) {
          isMatched = true;
          console.log("Works");
          break;
        }
      }
      //  add class "select" to matching rows
      if (isMatched) {
        row.setAttribute("class", "select");
      }
    }

    //  clear search value pattern from the search box
    searchFieldRef.value = "";
  }
}

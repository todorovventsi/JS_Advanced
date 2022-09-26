function search() {
  let pattern = document.getElementById("searchText").value;
  let listOfTowns = Array.from(document.querySelectorAll("#towns li")).filter(
    (item) => item.textContent.match(pattern)
  );
  let resultRef = document.getElementById("result");

  listOfTowns.forEach((item) => {
    item.style.textDecoration = "underline";
    item.style.fontWeight = "bold";
  });

  let matchesCount = listOfTowns.length;
  resultRef.textContent = `${matchesCount} matches found`;
}

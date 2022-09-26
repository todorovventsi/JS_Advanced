function extractText() {
  let items = Array.from(document.querySelectorAll("#items li"));
  let textArea = document.getElementById("result");
  for (let item of items) {
    textArea.value += item.textContent + "\n";
  }
}

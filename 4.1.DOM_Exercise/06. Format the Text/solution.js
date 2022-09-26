function solve() {
  let text = document.getElementById("input").value.split(".").slice(0, -1);
  let resultRef = document.getElementById("output");
  resultRef.innerHTML = 0;
  for (let i = 0; i < text.length; i += 3) {
    let data = text.slice(i, i + 3);
    let result = `<p>${data.join(". ")}.</p>`;
    resultRef.innerHTML += result;
  }
}

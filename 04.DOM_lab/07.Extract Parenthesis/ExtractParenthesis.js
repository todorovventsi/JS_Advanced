function extract(content) {
  let pattern = /(\(.+?\))/g;

  let textPar = document.getElementById("content").textContent;
  let found = textPar.match(pattern).map((match) => match.slice(1, -1));
  let text = found.join("; ");

  return text;
}

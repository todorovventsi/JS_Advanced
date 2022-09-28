function create(words) {
  let contentBoxRef = document.getElementById("content");

  for (let word of words) {
    let container = document.createElement("div");
    let paragraph = document.createElement("p");

    paragraph.textContent = word;
    paragraph.style.display = "none";

    container.appendChild(paragraph);
    contentBoxRef.appendChild(container);
  }

  let divCollection = Array.from(contentBoxRef.children);
  divCollection.forEach((element) =>
    element.addEventListener("click", showContent)
  );

  function showContent(evt) {
    evt.target.querySelector("p").style.display = "";
  }
}

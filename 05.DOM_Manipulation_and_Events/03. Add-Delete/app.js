function addItem() {
  let listElement = document.getElementById("items");
  let text = document.getElementById("newItemText");

  let liElement = document.createElement("li");
  let linkElement = document.createElement("a");

  linkElement.href = "#";
  linkElement.textContent = "[Delete]";
  linkElement.addEventListener("click", deleteItem);

  liElement.textContent = text.value;
  liElement.appendChild(linkElement);

  listElement.appendChild(liElement);
  text.value = "";

  function deleteItem() {
    linkElement.parentElement.remove();
  }
}

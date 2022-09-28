function addItem() {
  let listElement = document.getElementById("items");
  let text = document.getElementById("newItemText");
  let liElement = document.createElement("li");
  liElement.textContent = text.value;

  listElement.appendChild(liElement);
  text.value = "";
}

function addItem() {
  let userText = document.getElementById("newItemText");
  let userValue = document.getElementById("newItemValue");
  let menuElementRef = document.getElementById("menu");

  let optionElement = document.createElement("option");
  optionElement.textContent = userText.value;
  optionElement.value = userValue.value;
  menuElementRef.appendChild(optionElement);

  userText.value = "";
  userValue.value = "";
}

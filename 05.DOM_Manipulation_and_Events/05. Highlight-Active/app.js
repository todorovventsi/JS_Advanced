function focused() {
  let inputCollectionRef = [...document.querySelectorAll("input[type=text]")];
  inputCollectionRef.forEach((element) => {
    element.addEventListener("focus", addFocus);
    element.addEventListener("blur", removeFocus);
  });

  function addFocus(evt) {
    evt.target.parentElement.classList.add("focused");
  }

  function removeFocus(evt) {
    evt.target.parentElement.classList.remove("focused");
  }
}

function validate() {
  let emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let inputFieldRef = document.getElementById("email");

  inputFieldRef.addEventListener("change", validate);

  function validate(evt) {
    if (!inputFieldRef.value.match(emailPattern)) {
      inputFieldRef.classList.add("error");
    } else {
      inputFieldRef.classList.remove("error");
    }
  }
}

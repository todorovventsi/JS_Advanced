function toggle() {
  let buttonRef = document.getElementsByClassName("button")[0];
  let textRef = document.getElementById("extra");

  if (buttonRef.textContent === "More") {
    textRef.style.display = "block";
    buttonRef.textContent = "Less";
    return;
  }

  textRef.style.display = "none";
  buttonRef.textContent = "More";
}

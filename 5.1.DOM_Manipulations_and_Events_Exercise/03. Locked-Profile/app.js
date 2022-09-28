function lockedProfile() {
  let btnCollection = Array.from(document.querySelectorAll(".profile button"));
  console.log(btnCollection);

  btnCollection.forEach((btn) => btn.addEventListener("click", activateBtn));

  function activateBtn(evt) {
    let btn = evt.target;
    let userBoxRef = btn.parentElement;
    let isLocked = userBoxRef.querySelector("input").checked;
    let hiddenFieldsRef = userBoxRef.querySelector("div");

    if (!isLocked) {
      switch (btn.textContent) {
        case "Show more":
          show(hiddenFieldsRef, btn);
          break;
        case "Hide it":
          hide(hiddenFieldsRef, btn);
          break;
      }
    }
  }

  function show(hiddenRef, btnRef) {
    btnRef.textContent = "Hide it";
    hiddenRef.style.display = "block";
  }

  function hide(hiddenRef, btnRef) {
    btnRef.textContent = "Show more";
    hiddenRef.style.display = "none";
  }
}

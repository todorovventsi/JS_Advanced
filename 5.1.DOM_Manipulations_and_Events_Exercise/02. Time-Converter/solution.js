function attachEventsListeners() {
  let btnCollectionRef = Array.from(
    document.querySelectorAll("input[type=button]")
  );
  let inputCollectionRef = Array.from(
    document.querySelectorAll("input[type=text]")
  );
  let [daysRef, hoursRef, minutesRef, secondsRef] = inputCollectionRef;
  btnCollectionRef.forEach((btn) => btn.addEventListener("click", convertTime));

  function convertTime(evt) {
    let value = Number(
      evt.target.parentElement.querySelector("input[type=text]").value
    );

    let identifier = evt.target.id;

    switch (identifier) {
      case "daysBtn":
        hoursRef.value = value * 24;
        minutesRef.value = value * 24 * 60;
        secondsRef.value = value * 24 * 60 * 60;
        break;
      case "hoursBtn":
        daysRef.value = value / 24;
        minutesRef.value = value * 60;
        secondsRef.value = value * 60 * 60;
        break;
      case "minutesBtn":
        daysRef.value = value / 1440;
        hoursRef.value = value / 60;
        secondsRef.value = value * 60;
        break;
      case "secondsBtn":
        daysRef.value = value / 86400;
        hoursRef.value = value / 3600;
        minutesRef.value = value / 60;
        break;
    }
  }
}

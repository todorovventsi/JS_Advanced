function attachGradientEvents() {
  let gradientBox = document.getElementById("gradient-box");
  let resultFieldRef = document.getElementById("result");

  gradientBox.addEventListener("mousemove", showPercentage);
  gradientBox.addEventListener("mouseout", mouseOut);

  function showPercentage(evt) {
    let percentage = Math.floor(
      (Number(evt.offsetX) / Number(gradientBox.clientWidth)) * 100
    );
    resultFieldRef.textContent = percentage + "%";
  }

  function mouseOut(evt) {
    resultFieldRef.textContent = "";
  }
}

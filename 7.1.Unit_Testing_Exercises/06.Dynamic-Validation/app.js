function validate() {
	// function set-up
	const emailRegEx = /^[a-z]*@[a-z]*.[a-z]*$/;
	const inputFieldRef = document.getElementById("email");
	inputFieldRef.addEventListener("change", checkValidity);

	function checkValidity(event) {
		debugger;
		if (!emailRegEx.test(inputFieldRef.value)) {
			inputFieldRef.classList.add("error");
		}
		if (emailRegEx.test(inputFieldRef.value)) {
			inputFieldRef.classList.remove("error");
		}
	}
}

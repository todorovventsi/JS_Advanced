function validate() {
	// Get references to fields in interest
	const usernameField = document.getElementById("username");
	const emailField = document.getElementById("email");
	const passwordField = document.getElementById("password");
	const passwordConfirmField = document.getElementById("confirm-password");
	const isCompanyCheckboxField = document.getElementById("company");
	const companyInfoHiddenField = document.getElementById("companyInfo");
	const companyNumberField = document.getElementById("companyNumber");
	const buttonReference = document.getElementById("submit");
	const validMessageField = document.getElementById("valid");

	// Set-up regex patterns
	const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
	const emailPattern = /@(\w*[.])+/;
	const passwordPattern = /^(\w){5,15}$/;

	// Add event listeners to the button and checkbox
	buttonReference.addEventListener("click", checkValidity);
	isCompanyCheckboxField.addEventListener("change", showHideCopmanyInfo);

	// Show and hide company info block field
	function showHideCopmanyInfo(event) {
		let isChecked = event.target.checked;

		if (isChecked) {
			return (companyInfoHiddenField.style.display = "block");
		}
		companyInfoHiddenField.style.display = "none";
	}

	function checkValidity(event) {
		event.preventDefault(); // Stop page of reloading when clicked
		let invalidFields = []; // Storing invalid fields
		// Collect fields values
		let username = usernameField.value;
		let email = emailField.value;
		let password1 = passwordField.value;
		let password2 = passwordConfirmField.value;
		let companyNumber = Number(companyNumberField.value);

		// Check for validity every field and save invalid ones
		//--username
		if (!usernamePattern.test(username)) {
			invalidFields.push(usernameField);
		}
		//--email
		if (!emailPattern.test(email)) {
			invalidFields.push(emailField);
		}
		//--passwords
		let passwordsAreValid = true;
		if (!passwordPattern.test(password1)) {
			invalidFields.push(passwordField);
			passwordsAreValid = false;
		}
		if (!passwordPattern.test(password2)) {
			invalidFields.push(passwordConfirmField);
			passwordsAreValid = false;
		}
		if (passwordsAreValid) {
			if (password1 !== password2) {
				invalidFields.push(passwordField);
				invalidFields.push(passwordConfirmField);
			}
		}
		//--company number
		if (isCompanyCheckboxField.checked) {
			if (
				companyNumber === NaN ||
				companyNumber < 1000 ||
				companyNumber > 9999
			) {
				invalidFields.push(companyNumberField);
			}
		}
		//Set border style to all invalid fields
		for (let field of invalidFields) {
			field.style.borderColor = "red";
		}
		// Show valid message
		if (!invalidFields.length) {
			validMessageField.style.display = "block";
			usernameField.style.border = "none";
			emailField.style.border = "none";
			passwordField.style.border = "none";
			passwordConfirmField.style.border = "none";
			companyNumberField.style.border = "none";
		}
	}
}

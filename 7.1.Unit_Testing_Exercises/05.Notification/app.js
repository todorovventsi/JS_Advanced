function notify(message) {
	let notificationBlockRef = document.getElementById("notification");
	notificationBlockRef.textContent = message;
	notificationBlockRef.style.display = "block";

	notificationBlockRef.addEventListener("click", hide);

	function hide(evt) {
		notificationBlockRef.style.display = "none";
	}
}

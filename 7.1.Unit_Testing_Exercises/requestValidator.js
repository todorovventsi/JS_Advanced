function validateRequest(request) {
	let messageFlag = "";
	let isValid = true;
	let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
	let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
	let reURI = /^[a-zA-Z0-9.*]*$/;
	let reSpecialChar = /[<>&\\'"]/;

	if (validMethods.indexOf(request.method) == -1) {
		messageFlag = "Method";
		isValid = false;
	}

	if (
		(!reURI.test(request.uri) ||
			request.uri == "" ||
			request.uri == undefined) &&
		isValid
	) {
		messageFlag = "URI";
		isValid = false;
	}

	if (validVersions.indexOf(request.version) == -1 && isValid) {
		messageFlag = "Version";
		isValid = false;
	}

	if (
		(reSpecialChar.test(request.message) || request.message == undefined) &&
		isValid
	) {
		messageFlag = "Message";
		isValid = false;
	}

	if (!isValid) {
		throw new Error(`Invalid request header: Invalid ${messageFlag}`);
	}

	return request;
}

validateRequest({
	method: "GET",
	uri: "svn.public.catalog",
	version: "HTTP/1.1",
	message: "",
});

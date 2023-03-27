let buttonRef = document.querySelector("#clickMe");

function alertUser() {
	alert("You Clicked!");
	// buttonRef.removeEventListener("click", alertUser);
}

buttonRef.addEventListener("click", alertUser, { once: true });

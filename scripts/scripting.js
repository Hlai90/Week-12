let buttonRef = document.querySelector("#clickMe");

function alertUser() {
	alert("You Clicked!");
	// buttonRef.removeEventListener("click", alertUser);
}

buttonRef.addEventListener("click", alertUser, { once: true });

function changeBGPink() {
	document.body.style.background = "pink";
}

buttonRef.addEventListener("click", changeBGPink);

function changeText() {
	// if the button says click me, change text to clicked
	// else if it says clicked, change it to click
	if (buttonRef.textContent === "Click Me!") {
		buttonRef.textContent = "Clicked";
	} else {
		buttonRef.textContent = "Click Me!";
	}
}

buttonRef.addEventListener("click", changeText);

function updateImage() {
	const image = document.querySelector("#shoppingCart");
	image.setAttribute("src", "images/shoppingcart.png");
	image.setAttribute("height", 50);
	image.setAttribute("width", 50);
	image.setAttribute("alt", "shopping cart list");
}
buttonRef.addEventListener("click", updateImage);

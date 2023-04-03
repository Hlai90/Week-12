let buttonRef = document.querySelector("#clickMe");

function addNewButtonandPara() {
	document.querySelector("");
	let somebutton = document.createElement("button");
	document.body.appendChild(somebutton);
	somebutton.textContent = "purple";
	somebutton.addEventListener("mouseover", changeBGGreen);
	somebutton.addEventListener("click", changeTextColour);
}
buttonRef.addEventListener("click", addNewButtonandPara);

// function alertUser() {
//   alert("You Clicked!!!");
//   //   buttonRef.removeEventListener("click", alertUser);
// }

// // buttonRef.addEventListener("click", alertUser, { once: true });

// function changeBGPink() {
//   //   document.body.style.backgroundColor = "pink";
//   document.body.classList.add("pinkBG");
// }
// buttonRef.addEventListener("click", changeBGPink);

// function changeText() {
//   // if the button says "Click me !" change the textContent to Clicked!
//   if (buttonRef.textContent === "Click Me!") {
//     buttonRef.textContent = "Clicked!";
//   } else {
//     //else if it says "Clicked!" update it to "Click Me!"
//     buttonRef.textContent = "Click Me!";
//   }
// }
// buttonRef.addEventListener("click", changeText);

// function updateImage(event) {
//   console.log(event);
//   const image = document.querySelector("#shoppingCart");
//   image.setAttribute("src", "images/shopping-cart.png");
//   image.setAttribute("width", 50);
//   image.setAttribute("height", 50);
//   image.setAttribute("alt", "shopping cart icon");
// }
// buttonRef.addEventListener("click", updateImage);

const buttonContainer = document.querySelector(".button-container");
function changeBGGreen(event) {
	// console.log("clicked");
	if (event.target.tagName === "BUTTON") {
		// event.target is the element that we clicked on
		// event.target.style.backgroundColor = "green"
		event.target.classList.add("greenBG");
	}
}
buttonContainer.addEventListener("mouseover", changeBGGreen);

function changeTextColour(event) {
	//event.target -> button
	if (event.target.tagName == "BUTTON") {
		let mycolor = event.target.textContent;
		//If the text on the button says red -> the colour should be red
		event.target.style.color = mycolor;
	}
	//event.target.textContent
}

buttonContainer.addEventListener("mouseover", changeTextColour);

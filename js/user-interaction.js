"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var userName = "";

while (userName ==="") {
	userName = prompt("Hi, What is Your Name?")
}

console.log(userName);

// TODO: Show an alert message that welcomes the user based on their input.
alert("Hello, " + userName + " !")
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var response = confirm("Like Pizza," + userName + "?");

if (response) {
	alert("I enjoy pizza as well")
} else {
	alert("That's an unexpected response but i respect your individual taste!")
}
"use strict"

const button = document.querySelector(".button");
let next = () => {
	const body = document.querySelector("body");
	body.style.cssText= "background-color: #000000;";
	setTimeout(() => body.style.cssText= "background-color: #ffffff;",10000);
}
button.addEventListener("click",next);
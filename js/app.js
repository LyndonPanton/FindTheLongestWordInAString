"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function findLongestWord(string) {
		
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		findLongestWord(event.target.children[0].value);
	});
}
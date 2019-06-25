"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function display(arr) {
		document.getElementById("string-word").textContent = arr[0];
		document.getElementById("number-value").textContent = arr[1];
	}

	function longest(string) {
		if (!string.length) {
			document.getElementById("string-word").textContent = "???";
			document.getElementById("number-value").textContent = "???";
		} else {
			let longest = ["", 0];


			string.split(" ").forEach(function(word) {
				if (word.length > longest[1]) {
					longest[0] = word;
					longest[1] = word.length;
				}
			});

			display(longest);
		}
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		longest(event.target.children[0].value);
	});
}
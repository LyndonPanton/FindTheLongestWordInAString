"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function findLongestWord(string) {
		let longest = ["", 0];


		string.split(" ").forEach(function(word) {
			if (word.length > longest[1]) {
				longest[0] = word;
				longest[1] = word.length;
			}
		});
		
		return longest;
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		findLongestWord(event.target.children[0].value);
	});
}
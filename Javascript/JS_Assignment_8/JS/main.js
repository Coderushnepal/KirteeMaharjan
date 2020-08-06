document.addEventListener('DOMContentLoaded', function() {
	Array.from(bodyParts).forEach((part) => {
		part.style.visibility = 'hidden';
	});
});

document.addEventListener('keydown', function(e) {
	check.checkGuessedLetter(e.key.toLowerCase());
});

generateWord = words[Math.floor(Math.random() * words.length)];
console.log(generateWord);
var check = new Check();
check.createHiddenBoxes(generateWord);

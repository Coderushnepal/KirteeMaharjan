document.addEventListener('DOMContentLoaded', function() {
	Array.from(bodyParts).forEach((part) => {
		part.style.visibility = 'hidden';
	});
});

function restart() {
	window.location.href = window.location.pathname + window.location.search + window.location.hash;
	var popUP = document.getElementById('pop-up');
	popUP.style.display = 'none';
}

document.addEventListener('keydown', function(e) {
	check.checkGuessedLetter(e.key.toLowerCase());
});

generateWord = words[Math.floor(Math.random() * words.length)];
console.log(generateWord);
var check = new Check();
check.createHiddenBoxes(generateWord);

checklost();

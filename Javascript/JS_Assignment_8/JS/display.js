var bodyParts = document.getElementsByClassName('figure-part');
let i = 0;

var rightGuess = new Set();
var wrongGuess = new Set();

function displayAlreadyGuessed(letter) {
	var box = document.getElementById('guessedLetter');
	setTimeout(() => {
		box.style.visibility = 'hidden';
	}, 1000);
	box.innerHTML = letter + ' is already guessed';
	console.log(box);
	box.style.visibility = 'visible';
}

function displayRightGuess(value, index) {
	const hiddenBox = document.getElementById('hiddenBoxContainer').children[index];
	hiddenBox.innerHTML = value;
}

function appendRightSet(letter) {
	if (rightGuess.has(letter)) {
		displayAlreadyGuessed(letter);
		return false;
	} else {
		rightGuess.add(letter);
		return true;
	}
}

function displayWrongGuess(value) {
	const wrongList = document.getElementById('wrong-guesses');
	wrongList.innerHTML = Array.from(wrongGuess).join(', ');
}

function displyaFigureParts() {
	bodyParts[i].style.visibility = 'visible';
	i++;
}

function appendWrongSet(letter) {
	if (wrongGuess.has(letter)) {
		displayAlreadyGuessed(letter);
	} else {
		wrongGuess.add(letter);
		displayWrongGuess(letter);
		displyaFigureParts();
		checklost();
		// console.log(Array.from(bodyParts).every((part) => part.style.visibility == 'visible'));
		// if (Array.from(bodyParts).every((part) => part.style.visibility == 'visible')) {
		// 	var popUp = document.getElementById('pop-up');
		// 	popUp.style.display = 'block';
	}
}

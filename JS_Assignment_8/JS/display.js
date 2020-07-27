var bodyParts = document.getElementsByClassName('figure-part');
let i = 0;

var rightGuess = new Set();
var wrongGuess = new Set();

function displayAlreadyGuessed(letter) {
	var box = document.getElementById('guessedLetter');
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
	} else {
		rightGuess.add(letter);
	}
}

function displayWrongGuess(value) {
	const wrongList = document.getElementById('wrong-guesses');
	wrongList.innerHTML = Array.from(wrongGuess).join(', ');
}

function displyaFigureParts() {
	bodyParts[i].style.visibility = 'visible';
	i++;
	// console.log(i);
	return i == bodyParts.length ? true : false;
}

function appendWrongSet(letter) {
	if (wrongGuess.has(letter)) {
		displayAlreadyGuessed(letter);
	} else {
		wrongGuess.add(letter);
		displayWrongGuess(letter);
		if (displyaFigureParts()) {
			console.log('you lost');
		}
	}
}

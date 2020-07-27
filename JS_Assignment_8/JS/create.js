function Check() {
	this.createHiddenBoxes = function(word) {
		this.letters = Array.from(word);
		var answerContainer = document.getElementById('hiddenBoxContainer');
		this.letters.forEach((value, index) => {
			var hiddenBox = document.createElement('span');
			hiddenBox.className = 'hiddenBox';
			answerContainer.appendChild(hiddenBox);
		});
	};

	this.checkGuessedLetter = function(letter) {
		checkWin();
		checklost();
		if (this.letters.includes(letter)) {
			if (appendRightSet(letter)) {
				this.letters.forEach((value, index) => {
					if (value === letter) {
						displayRightGuess(letter, index);
					}
				});
			}
		} else {
			if (/^[a-z]{1}$/i.test(letter)) {
				console.log('pressed' + letter);
				appendWrongSet(letter);
			}
		}
		return;
	};
}

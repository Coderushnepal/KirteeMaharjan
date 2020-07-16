// Q. 1
var sequence = function(str) {
	return str.split('1').sort().pop();
};

console.log('\n\n-------- Longest sequence of zeros ------\n');
console.log(sequence('1110011000001100'));

// Q. 2
vowels = {
	a: 1,
	e: 2,
	i: 3,
	o: 4,
	u: 5
};

var replaceVowel = function(str) {
	return str.split('').reduce(function(acc, char) {
		return vowels[char] == undefined ? acc.concat(char) : acc.concat(vowels[char]);
	}, '');
};

console.log('\n\n-------- Replace vowels with number ------\n');
console.log(replaceVowel('karachi'));
console.log(replaceVowel('chembur'));
console.log(replaceVowel('khandbari'));

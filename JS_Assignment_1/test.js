console.log('----------------   JS  ASSIGNMENT-1    ------------- \n\n');

// Q. 1 solution
var ans1 = function pattern(x) {
	let str = '';
	for (let i = x; i >= 1; i--) {
		for (let j = 1; j <= i; j++) {
			str = str.concat('*');
		}
		str = str.concat('\n');
	}
	return str;
};

// Q. 2 solution
function censor(str) {
	let result = '';
	words = str.split(' ');
	// console.log(words);
	for (i = 0; i < words.length; i++) {
		var len = words[i].length;
		if (len > 4) {
			result = result + '*'.repeat(len) + ' ';
		} else {
			result = result + words[i] + ' ';
		}
	}
	return result;
}

// Q. 3 solution
function toArray(obj) {
	let keys = Object.keys(obj);
	let len = keys.length;
	// console.log(keys);
	let arr = [];
	for (let i = 0; i < len; i++) {
		arr.push([ keys[i], obj[keys[i]] ]);
	}
	return arr;
}

// Q.4 solution
function identicalFilter(arr) {
	let identical = [];
	let k = 0;
	for (i = 0; i < arr.length; i++) {
		let repeatation = new Set(arr[i]);
		if (repeatation.size === 1) {
			identical[k++] = arr[i];
		}
	}
	return identical;
}

// Q.5 solution
function keysAndValues(obj) {
	let keys = Object.keys(obj);
	keys.sort();
	let values = [];
	for (i = 0; i < keys.length; i++) {
		values[i] = obj[keys[i]];
	}
	return [ keys, values ];
}

// Q.1 Output
console.log(' Answer-1 : \n\n');
console.log(ans1(7));

// Q.2 Output
console.log(' \n\nAnswer-2 : \n\n');
console.log(censor('The code is fourty'));
console.log(censor('Two plus three is five'));
console.log(censor('aaaa aaaaa 1234 12345'));

// Q.3 Output
console.log(' \n\nAnswer-3 : \n\n');
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));

// Q.4 Output
console.log(' \n\nAnswer-4 : \n\n');
console.log(identicalFilter([ '88', '999', '22', '545', '133' ]));
console.log(identicalFilter([ 'xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo' ]));

// Q.5 Output
console.log(' \n\nAnswer-5 : \n\n');
console.log(keysAndValues({ b: 'Microsoft', a: 'Apple', c: 'Google' }));
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

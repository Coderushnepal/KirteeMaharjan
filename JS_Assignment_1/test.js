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

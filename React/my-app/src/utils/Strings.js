export const isVowel = (ch) => {
	const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
	return vowels.includes(ch.toLowerCase());
};

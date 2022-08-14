// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
function userStop() {
	let userWordArr = [];
	let userWord = window.prompt('Enter a word or type stop');
	while (userWord !== 'stop') {
		userWordArr.push(userWord);
		userWord = window.prompt('Enter a word or type stop');
	}
	window.alert(`Your list of words: ${userWordArr}`);
}

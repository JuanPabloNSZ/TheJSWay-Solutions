// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
let enterNumLessOrEqual100 = function () {
	let userNumber = window.prompt('Enter a number less than or equal to 100');
	while (userNumber > 100) {
		userNumber = window.prompt('Enter a number less than or equal to 100');
	}
};

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
let enterNumBetween50And100 = function () {
	let userNumber = window.prompt('Enter a number between 50 and 100');
	while (userNumber < 50 || userNumber > 100) {
		userNumber = window.prompt('Enter a number between 50 and 100');
	}
};

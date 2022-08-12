// Write a program that asks the user for a number, then shows the multiplication table for this number.
let enterANum = function () {
	let userNumber = window.prompt('Enter a number');
	for (let i = 1; i <= 12; i++) {
		// If the input is not a valid number, this line will ask the user until a valid number is received.
		if (Number.isNaN(Number(userNumber))) {
			userNumber = window.prompt('Please, enter a valid number');
		} else {
			console.log(`${userNumber} X ${i} = ${userNumber * i}`);
		}
	}
};

// When you are done, improve the program so it only accepts numbers between 2 and 9
let aNumBetween2And9 = function () {
	let numberBetween2And9 = window.prompt('Enter a number between 2 and 9');
	while (
		numberBetween2And9 < 2 ||
		numberBetween2And9 > 9 ||
		Number.isNaN(Number(numberBetween2And9))
	) {
		numberBetween2And9 = window.prompt('Enter a number between 2 and 9');
	}
	for (let i = 1; i <= 12; i++) {
		console.log(`${numberBetween2And9} X ${i} = ${numberBetween2And9 * i}`);
	}
};
